import {graphqlSdk} from '~/lib/GraphQLRequest';
import {getPathsForIndex} from '~/lib/UserBookPageCommon';
import * as General from './[number]';

export type UrlQuery = {
  username: string;
};

export const getStaticPaths = async () => {
  return graphqlSdk
    .AllUserStackedBooksPage()
    .then(({allUsers: allAccounts}) => getPathsForIndex(allAccounts));
};

export const getStaticProps: typeof General.getStaticProps = async ({
  params,
  ...rest
}) =>
  General.getStaticProps({params: params && {...params, number: '1'}, ...rest});

export const Page = General.Page;
export default Page;
