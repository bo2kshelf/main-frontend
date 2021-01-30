import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next';
import React from 'react';
import {graphqlSdk} from '~/lib/GraphQLRequest';
import {LoginPage, LoginPageProps} from '~/templates/server-side/LoginPage';

export type UrlQuery = Record<string, never>;

export const getServerSideProps: GetServerSideProps<
  LoginPageProps,
  UrlQuery
> = async () => graphqlSdk.LoginPage().then((data) => ({props: data}));

export const Page: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  return <LoginPage {...props} />;
};
export default Page;
