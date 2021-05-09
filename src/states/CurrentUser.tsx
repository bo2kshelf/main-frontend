import {atom} from 'recoil';

export type CurrentUser = {
  userName: string;
  displayName: string;
  picture: string;
};

export const currentUserState = atom<undefined | CurrentUser>({
  key: 'CurrentUser',
  default: undefined,
});
