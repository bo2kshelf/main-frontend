import {NextPage} from 'next';
import React from 'react';
import {withPageAuthenticated} from '~/hoc/withPageAuthenticated';

export const Page: NextPage = (props) => {
  return <div />;
};

export default withPageAuthenticated(Page);
