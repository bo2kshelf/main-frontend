import {graphqlSdk} from '~/graphql/api-public/graphql-request';
import {getPathsForIndex, UrlQueryForIndexPage} from '~/templates/UserBooks';
import * as General from './[number]';

export type UrlQuery = UrlQueryForIndexPage;

export const getStaticPaths = async () => {
  return graphqlSdk.AllUserReadingBooksPage().then(getPathsForIndex);
};

export const getStaticProps: typeof General.getStaticProps = async ({
  params,
  ...rest
}) =>
  General.getStaticProps({params: params && {...params, number: '1'}, ...rest});

export const Page = General.Page;
export default Page;
