import { envs } from '../../../config/envs';
import { FetchResponse } from '../../../models/FetchResponse';

const fetchInstance = async <T>(endpoint: string): Promise<FetchResponse<T>> => {
  const baseUrl = envs.BASE_URL;

  try {
    const response = await fetch(`${baseUrl}${endpoint}`);
    const responseBody = (await response.json()) as T;
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
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
