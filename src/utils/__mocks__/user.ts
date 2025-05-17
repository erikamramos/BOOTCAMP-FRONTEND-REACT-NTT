import { User, LoginPayload, AuthResponse } from '../../models/auth';

export const UserMock: User = {
  id: 1,
  username: 'emilys',
  email: 'emily.johnson@x.dummyjson.com',
  firstName: 'Emily',
  lastName: 'Johnson',
  gender: 'female',
  image: 'https://dummyjson.com/icon/emilys/128',
};

export const UserReponseMock: AuthResponse = {
  user: {
    id: 1,
    username: 'emilys',
    email: 'emily.johnson@x.dummyjson.com',
    firstName: 'Emily',
    lastName: 'Johnson',
    gender: 'female',
    image: 'https://dummyjson.com/icon/emilys/128',
  },
  token: 'test-token',
};

export const loginMock: LoginPayload = {
  username: 'emilys',
  password: 'emilyspass',
};

export const authMock = {
  state: {
    user: {
      id: 1,
      username: 'emilys',
      email: 'emily.johnson@x.dummyjson.com',
      firstName: 'Emily',
      lastName: 'Johnson',
      gender: 'female',
      image: 'https://dummyjson.com/icon/emilys/128',
    },
    token: 'test-token',
  },
  logoutUser: jest.fn(),
};

export const UserMapperMock = {
  accessToken: 'test-token',
  id: 1,
  username: 'emilys',
  email: 'emily.johnson@x.dummyjson.com',
  firstName: 'Emily',
  lastName: 'Johnson',
  gender: 'female',
  image: 'https://dummyjson.com/icon/emilys/128',
};
