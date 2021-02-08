import {GetStaticProps} from 'next';
import {UserReadBooksPageQuery} from '~/_generated/graphql-request';
import * as General from './[number]';

export type UrlQuery = {
  username: string;
};

export const getStaticPaths = General.getStaticPaths;

export const getStaticProps: GetStaticProps<
  UserReadBooksPageQuery,
  UrlQuery
> = async ({params, ...rest}) =>
  General.getStaticProps({params: params && {...params, number: '1'}, ...rest});

export const Page = General.Page;
export default Page;
