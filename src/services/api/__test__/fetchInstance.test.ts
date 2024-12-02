import fetchInstance from '@/services/api/config/fetchInstance';

jest.mock('@/config/envs', () => ({
  envs: { BASE_URL: 'https://api.example.com' },
}));

describe('fetchInstance', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
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
    expect(global.fetch).toHaveBeenCalledWith('https://api.example.com/test-endpoint', {
      headers: {},
    });
    expect(result).toEqual({
      data: mockResponse,
      status: 200,
      statusText: 'OK',
    });
  });

  it('should include Authorization header when token exists in localStorage', async () => {
    const mockResponse = { id: 1, name: 'Test Item' };
    localStorage.setItem('authToken', 'test-token');

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        statusText: 'OK',
        json: () => Promise.resolve(mockResponse),
      }),
    ) as jest.Mock;

    await fetchInstance('/test-endpoint');
    expect(global.fetch).toHaveBeenCalledWith('https://api.example.com/test-endpoint', {
      headers: {
        Authorization: 'Bearer test-token',
      },
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

    await expect(fetchInstance('/test-endpoint')).rejects.toEqual({
      message: 'Not Found',
      status: 404,
      statusText: 'Not Found',
    });
    expect(global.fetch).toHaveBeenCalledWith('https://api.example.com/test-endpoint', {
      headers: {},
    });
  });

  it('should throw an error for a network issue', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('Network Error'))) as jest.Mock;

    await expect(fetchInstance('/test-endpoint')).rejects.toThrow('Network Error');
    expect(global.fetch).toHaveBeenCalledWith('https://api.example.com/test-endpoint', {
      headers: {},
    });
  });

  it('should throw a timeout error for an aborted request', async () => {
    const abortError = new DOMException('The operation was aborted.', 'AbortError');
    global.fetch = jest.fn(() => Promise.reject(abortError)) as jest.Mock;

    await expect(fetchInstance('/test-endpoint')).rejects.toThrow('Request timeout');
    expect(global.fetch).toHaveBeenCalledWith('https://api.example.com/test-endpoint', {
      headers: {},
    });
  });
});
