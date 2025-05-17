import { fetchAuth } from '@/services/api/authServices';
import fetchInstance from '@/services/api/config/fetchInstance';
import { mapAuthResponse } from '@/services/mappers/authMapper';
import { LoginPayload, AuthResponse } from '@/models/auth';
import { Paths } from '@/services/api/config/paths';
import { loginMock, UserReponseMock } from '@/utils/__mocks__/user';

jest.mock('@/services/api/config/fetchInstance', () => jest.fn());
jest.mock('@/services/mappers/authMapper', () => ({
  mapAuthResponse: jest.fn(),
}));

describe('fetchAuth', () => {
  const mockResponse: AuthResponse = UserReponseMock;

  const payload: LoginPayload = loginMock;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should send POST request with correct payload and return mapped response', async () => {
    const mappedResponse = { ...mockResponse };
    (fetchInstance as jest.Mock).mockResolvedValue({ data: mockResponse });
    (mapAuthResponse as jest.Mock).mockReturnValue(mappedResponse);

    const result = await fetchAuth(payload);

    expect(fetchInstance).toHaveBeenCalledWith(Paths.Auth, {
      method: 'POST',
      body: expect.any(FormData),
    });

    const formData = (fetchInstance as jest.Mock).mock.calls[0][1].body as FormData;
    expect(formData.get('username')).toBe(payload.username);
    expect(formData.get('password')).toBe(payload.password);

    expect(mapAuthResponse).toHaveBeenCalledWith(mockResponse);
    expect(result).toEqual(mappedResponse);
  });

  it('should throw an error if fetchInstance fails', async () => {
    (fetchInstance as jest.Mock).mockRejectedValue(new Error('Network Error'));

    await expect(fetchAuth(payload)).rejects.toThrow('Network Error');
    expect(fetchInstance).toHaveBeenCalledWith(Paths.Auth, {
      method: 'POST',
      body: expect.any(FormData),
    });
  });
});
