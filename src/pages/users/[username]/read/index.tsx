import {GetStaticProps} from 'next';
import {UserReadBooksPageProps} from '~/templates/server/UserBooksPage';
import * as General from './[number]';

export type UrlQuery = {
  username: string;
};

export const getStaticPaths = General.getStaticPaths;

export const getStaticProps: GetStaticProps<
  UserReadBooksPageProps,
  UrlQuery
> = async ({params, ...rest}) =>
  General.getStaticProps({params: params && {...params, number: '1'}, ...rest});

export const Page = General.Page;
export default Page;
