import {GetStaticProps} from 'next';
import {graphqlSdk} from '~/lib/GraphQLRequest';
import {getPathsForIndex} from '~/lib/UserBookPageCommon';
import {UserWishReadBooksPageProps} from '~/templates/server/UserBooksPage';
import * as General from './[number]';

export type UrlQuery = {
  username: string;
};

export const getStaticPaths = async () => {
  return graphqlSdk
    .AllUserWishReadBooksPage()
    .then(({allUsers: allAccounts}) => getPathsForIndex(allAccounts));
};

export const getStaticProps: GetStaticProps<
  UserWishReadBooksPageProps,
  UrlQuery
> = async ({params, ...rest}) =>
  General.getStaticProps({params: params && {...params, number: '1'}, ...rest});

export const Page = General.Page;
export default Page;
