import {GetStaticPaths} from 'next';
import {graphqlSdk} from '~/graphql/api-public/graphql-request';
import * as General from './[number]';

export type UrlQuery = {username: string};

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  return graphqlSdk.AllUserRecordsPage().then((result) => ({
    paths: result.allUsers.map(({userName}) => ({
      params: {username: userName},
    })),
    fallback: false,
  }));
};

export const getStaticProps: typeof General.getStaticProps = async ({
  params,
  ...rest
}) =>
  General.getStaticProps({params: params && {...params, number: '1'}, ...rest});

export const Page = General.Page;
export default Page;
