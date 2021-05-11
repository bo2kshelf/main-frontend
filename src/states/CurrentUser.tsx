import {atom} from 'recoil';

export type CurrentUser = {
  userName: string;
  displayName: string;
  picture: string;
};

export const stateCurrentUser = atom<undefined | CurrentUser>({
  key: 'CurrentUser',
  default: undefined,
});

export const stateCurrentUserRegistered = atom<undefined | boolean>({
  key: 'CurrentUserRegistered',
  default: undefined,
});
