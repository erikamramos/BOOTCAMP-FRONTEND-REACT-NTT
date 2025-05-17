import { mapAuthResponse } from '@/services/mappers/authMapper';
import { AuthResponse } from '@/models/auth';
import { UserMapperMock, UserReponseMock } from '@/utils/__mocks__/user';

describe('mapAuthResponse', () => {
  it('should map the user and token correctly', () => {
    const mockUser = UserMapperMock;

    const expectedResponse: AuthResponse = UserReponseMock;

    const result = mapAuthResponse(mockUser);

    expect(result).toEqual(expectedResponse);
  });
});
