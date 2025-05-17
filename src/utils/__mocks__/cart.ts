import { Cart } from '@/models/Cart';

export const cartStateMock = {
  cart: [
    {
      id: 1,
      title: 'Laptop',
      description: 'A powerful laptop for professionals.',
      thumbnail: '/laptop.jpg',
      quantity: 2,
      price: 10.0,
      totalPrice: 20.0,
    },
    {
      id: 2,
      title: 'Phone',
      description: 'A powerful phone for professionals.',
      thumbnail: '/phone.jpg',
      quantity: 1,
      price: 20.0,
      totalPrice: 20.0,
    },
  ],
  totalPrice: 40.0,
};

export const productCartMock: Cart = {
  id: 1,
  title: 'Laptop',
  description: 'A powerful laptop for professionals.',
  thumbnail: '/laptop.jpg',
  quantity: 2,
  price: 100.0,
  totalPrice: 200.0,
};

export const cartMock: Cart[] = [
  {
    id: 1,
    title: 'Laptop',
    description: 'A powerful laptop for professionals.',
    price: 1200,
    thumbnail: 'https://example.com/laptop-thumbnail.jpg',
    quantity: 1,
    totalPrice: 1200,
  },
  {
    id: 2,
    title: 'Phone',
    description: 'A powerful phone for professionals.',
    price: 800,
    thumbnail: 'https://example.com/phone-thumbnail.jpg',
    quantity: 1,
    totalPrice: 800,
  },
];

export const cartInitialMock = {
  state: { totalItems: 3 },
};
