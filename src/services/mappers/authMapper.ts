import { AuthResponse } from '@/models/auth';

export const mapAuthResponse = (user: any): AuthResponse => {
  return {
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      gender: user.gender,
      image: user.image,
    },
    token: user.accessToken,
  };
};
