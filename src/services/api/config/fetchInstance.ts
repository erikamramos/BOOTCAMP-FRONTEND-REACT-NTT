import { envs } from '../../../config/envs';
import { FetchResponse, FetchOptions } from '../../../models/FetchConfig';

const fetchInstance = async <T>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<FetchResponse<T>> => {
  const baseUrl = envs.BASE_URL;
  const token = localStorage.getItem('authToken');

  const defaultOptions: RequestInit = {
    headers: {},
  };

  if (token) {
    defaultOptions.headers = {
      ...defaultOptions.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  const mergedOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, mergedOptions);
    const responseBody = (await response.json()) as T;
    if (!response.ok) {
      throw {
        ...responseBody,
        status: response.status,
        statusText: response.statusText,
      };
    }

    return {
      data: responseBody,
      status: response.status,
      statusText: response.statusText,
    };
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new Error('Request timeout');
    }
    throw error;
  }
};

export default fetchInstance;
