export type Links = {
  '/users/[username]/have': {
    pathname: '/users/[username]/have';
    query: {username: string};
  };
  '/users/[username]/have/[number]': {
    pathname: '/users/[username]/have/[number]';
    query: {username: string; number: string};
  };

  '/users/[username]/read': {
    pathname: '/users/[username]/read';
    query: {username: string};
  };
  '/users/[username]/read/[number]': {
    pathname: '/users/[username]/read/[number]';
    query: {username: string; number: string};
  };

  '/users/[username]/reading': {
    pathname: '/users/[username]/reading';
    query: {username: string};
  };
  '/users/[username]/reading/[number]': {
    pathname: '/users/[username]/reading/[number]';
    query: {username: string; number: string};
  };

  '/users/[username]/wish': {
    pathname: '/users/[username]/wish';
    query: {username: string};
  };
  '/users/[username]/wish/[number]': {
    pathname: '/users/[username]/wish/[number]';
    query: {username: string; number: string};
  };

  '/users/[username]/stacked': {
    pathname: '/users/[username]/stacked';
    query: {username: string};
  };
  '/users/[username]/stacked/[number]': {
    pathname: '/users/[username]/stacked/[number]';
    query: {username: string; number: string};
  };
};

export const linkFactories: {
  [key in keyof Links]: (query: Links[key]['query']) => Links[key];
} = {
  '/users/[username]/have': (query) => ({
    pathname: '/users/[username]/have' as const,
    query,
  }),
  '/users/[username]/have/[number]': (query) => ({
    pathname: '/users/[username]/have/[number]' as const,
    query,
  }),

  '/users/[username]/read': (query) => ({
    pathname: '/users/[username]/read' as const,
    query,
  }),
  '/users/[username]/read/[number]': (query) => ({
    pathname: '/users/[username]/read/[number]' as const,
    query,
  }),

  '/users/[username]/reading': (query) => ({
    pathname: '/users/[username]/reading' as const,
    query,
  }),
  '/users/[username]/reading/[number]': (query) => ({
    pathname: '/users/[username]/reading/[number]' as const,
    query,
  }),

  '/users/[username]/wish': (query) => ({
    pathname: '/users/[username]/wish' as const,
    query,
  }),
  '/users/[username]/wish/[number]': (query) => ({
    pathname: '/users/[username]/wish/[number]' as const,
    query,
  }),

  '/users/[username]/stacked': (query) => ({
    pathname: '/users/[username]/stacked' as const,
    query,
  }),
  '/users/[username]/stacked/[number]': (query) => ({
    pathname: '/users/[username]/stacked/[number]' as const,
    query,
  }),
};
