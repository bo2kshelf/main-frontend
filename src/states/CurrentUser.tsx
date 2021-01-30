import {atom} from 'recoil';

export type CurrentUser = {
  id: string;
  profile: {
    userName: string;
    displayName: string;
    picture: string;
  } | null;
};

export const currentUserState = atom<undefined | null | CurrentUser>({
  key: 'CurrentUser',
  default: undefined,
});
