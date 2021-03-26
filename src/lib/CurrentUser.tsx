import React, {useEffect} from 'react';
import {useEffectOnce} from 'react-use';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {useGetCurrentUserLazyQuery} from '~/graphql/codegen/apollo';
import {currentUserLoadingState, currentUserState} from '~/states/CurrentUser';

export const CurrentUser: React.FC = () => {
  const [getCurrentUser, {data, loading}] = useGetCurrentUserLazyQuery();
  const currentUser = useRecoilValue(currentUserState);
  const setCurrentUser = useSetRecoilState(currentUserState);
  const setCurrentUserLoading = useSetRecoilState(currentUserLoadingState);

  useEffect(() => {
    if (!loading) setCurrentUserLoading(loading);
  });

  useEffect(() => {
    if (data?.currentUser) setCurrentUser(data.currentUser);
  });

  useEffectOnce(() => {
    if (!currentUser) {
      setCurrentUserLoading(true);
      setCurrentUser(undefined); // eslint-disable-line unicorn/no-useless-undefined
      getCurrentUser();
    }
  });

  return <></>;
};
