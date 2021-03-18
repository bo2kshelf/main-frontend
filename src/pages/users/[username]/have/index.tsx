import {GetStaticProps} from 'next';
import {graphqlSdk} from '~/lib/GraphQLRequest';
import {getPathsForIndex} from '~/lib/UserBookPageCommon';
import {UserHaveBooksPageProps} from '~/templates/server/UserBooksPage';
import * as General from './[number]';

export type UrlQuery = {
  username: string;
};

export const getStaticPaths = async () => {
  return graphqlSdk
    .AllUserHaveBooksPage()
    .then(({allUsers: allAccounts}) => getPathsForIndex(allAccounts));
};

export const getStaticProps: GetStaticProps<
  UserHaveBooksPageProps,
  UrlQuery
> = async ({params, ...rest}) =>
  General.getStaticProps({params: params && {...params, number: '1'}, ...rest});

export const Page = General.Page;
export default Page;
