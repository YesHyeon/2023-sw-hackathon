import { atom } from 'recoil';

export const locationState = atom<{ lat: Number; lng: Number }>({
  key: 'locationState',
  default: {
    lat: 0,
    lng: 0,
  },
});
