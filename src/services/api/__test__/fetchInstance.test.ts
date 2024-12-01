import fetchInstance from '@/services/api/config/fetchInstance';

jest.mock('@/config/envs', () => ({
  envs: { BASE_URL: 'https://api.example.com' },
}));

describe('fetchInstance', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return data for a successful response', async () => {
    const mockResponse = { id: 1, name: 'Test Item' };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        statusText: 'OK',
        json: () => Promise.resolve(mockResponse),
      }),
    ) as jest.Mock;

    const result = await fetchInstance<{ id: number; name: string }>('/test-endpoint');
    expect(global.fetch).toHaveBeenCalledWith('https://api.example.com/test-endpoint');
    expect(result).toEqual({
      data: mockResponse,
      status: 200,
      statusText: 'OK',
    });
  });

  it('should throw an error for a failed response', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: 404,
        statusText: 'Not Found',
        json: () => Promise.resolve({ message: 'Not Found' }),
      }),
    ) as jest.Mock;

    await expect(fetchInstance('/test-endpoint')).rejects.toThrow('Error 404: Not Found');
    expect(global.fetch).toHaveBeenCalledWith('https://api.example.com/test-endpoint');
  });

  it('should throw an error for a network issue', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('Network Error'))) as jest.Mock;

    await expect(fetchInstance('/test-endpoint')).rejects.toThrow('Network Error');
    expect(global.fetch).toHaveBeenCalledWith('https://api.example.com/test-endpoint');
  });

  it('should throw a timeout error for an aborted request', async () => {
    const abortError = new DOMException('The operation was aborted.', 'AbortError');
    global.fetch = jest.fn(() => Promise.reject(abortError)) as jest.Mock;

    await expect(fetchInstance('/test-endpoint')).rejects.toThrow('Request timeout');
    expect(global.fetch).toHaveBeenCalledWith('https://api.example.com/test-endpoint');
  });
});

/*
import fetchInstance from '@/services/api/config/fetchInstance';

jest.mock('@/config/envs', () => ({
  envs: { BASE_URL: 'https://api.example.com' },
}));

const mockFetch = (data: any, status = 200, ok = true): jest.Mock => {
  const fn = jest.fn().mockImplementation(() => {
    const response = {
      ok,
      status,
      statusText: status === 200 ? 'OK' : 'Error',
      json: () => Promise.resolve(data),
      clone: () => ({ ...response }),
    };
    return Promise.resolve(response);
  });

  global.fetch = fn;
  return fn;
};

describe('fetchInstance', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should return data for a successful response', async () => {
    const mockResponse = { id: 1, name: 'Test Item' };
    mockFetch(mockResponse);

    const result = await fetchInstance<{ id: number; name: string }>('/test-endpoint');
    expect(global.fetch).toHaveBeenCalledWith('https://api.example.com/test-endpoint');
    expect(result).toEqual({
      data: mockResponse,
      status: 200,
      statusText: 'OK',
    });
  });

  it('should throw an error for a failed response', async () => {
    mockFetch({ message: 'Not Found' }, 404, false);

    await expect(fetchInstance('/test-endpoint')).rejects.toThrow('Error 404: Error');
    expect(global.fetch).toHaveBeenCalledWith('https://api.example.com/test-endpoint');
  });

  it('should throw a timeout error for an aborted request', async () => {
    const abortError = new DOMException('The operation was aborted.', 'AbortError');
    global.fetch = jest.fn().mockRejectedValueOnce(abortError);

    await expect(fetchInstance('/test-endpoint')).rejects.toThrow('Request timeout');
    expect(global.fetch).toHaveBeenCalledWith('https://api.example.com/test-endpoint');
  });

  it.each([
    ['Network Error', new Error('Network Error')],
    ['Unknown Error', new Error('Unknown Error')],
  ])('should handle fetch errors (%s)', async (_, error) => {
    global.fetch = jest.fn().mockRejectedValueOnce(error);

    await expect(fetchInstance('/test-endpoint')).rejects.toThrow(error.message);
    expect(global.fetch).toHaveBeenCalledWith('https://api.example.com/test-endpoint');
  });
});
*/
