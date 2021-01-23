import {useUser} from '@auth0/nextjs-auth0';
import React, {createContext, useEffect, useState} from 'react';
import {useHeaderNavUserInfoLazyQuery} from '~/_generated/apollo';

export type CurrentUser = {
  picture: string;
  userName: string;
  displayName: string;
};
export type Context = {
  isLoading: boolean;
  isAuthenticated: boolean;
  currentUser: CurrentUser | null;
};

export const CurrentUserContext = createContext<Context>({
  isLoading: true,
  isAuthenticated: false,
  currentUser: null,
});

export const CurrentUserProvider: React.FC = ({children}) => {
  const [loading, setLoading] = useState<Context['isLoading']>(true);
  const [authenticated, setAuthenticated] = useState<
    Context['isAuthenticated']
  >(false);
  const [currentUser, setCurrentUser] = useState<Context['currentUser']>(null);

  const {user: auth0User, isLoading: auth0Loading} = useUser();
  const [
    loadCurrentUser,
    {data, loading: apolloLoading},
  ] = useHeaderNavUserInfoLazyQuery();

  /* isLoading */
  useEffect(() => setLoading(auth0Loading), [auth0Loading, apolloLoading]);

  /* isAuthenticated */
  useEffect(() => setAuthenticated(Boolean(currentUser)), [currentUser]);

  /* currentUser */
  useEffect(() => {
    if (data?.currentUser) setCurrentUser(data.currentUser);
  }, [data?.currentUser]);

  useEffect(() => {
    if (!authenticated && !currentUser) loadCurrentUser();
  }, [authenticated, currentUser, loadCurrentUser]);

  return (
    <CurrentUserContext.Provider
      value={{
        isLoading: loading,
        isAuthenticated: authenticated,
        currentUser,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
CurrentUserProvider.displayName = 'CurrentUserProvider';
