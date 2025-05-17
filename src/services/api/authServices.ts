import { AuthResponse, LoginPayload } from '@/models/auth';
import fetchInstance from './config/fetchInstance';
import { Paths } from './config/paths';
import { mapAuthResponse } from '../mappers/authMapper';

export const fetchAuth = async (dataAuth: LoginPayload): Promise<AuthResponse> => {
  const formdata = new FormData();
  formdata.append('username', dataAuth.username);
  formdata.append('password', dataAuth.password);

  const response = await fetchInstance<AuthResponse>(`${Paths.Auth}`, {
    method: 'POST',
    body: formdata,
  });
  const data = mapAuthResponse(response.data);
  return data;
};
