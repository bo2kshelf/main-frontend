import {atom} from 'recoil';

export type CurrentUser = {
  id: string;
  userName: string;
  displayName: string;
  picture: string;
};

export const currentUserState = atom<undefined | CurrentUser>({
  key: 'CurrentUser',
  default: undefined,
});

export const currentUserLoadingState = atom<boolean>({
  key: 'CurrentUserLoading',
  default: true,
});
