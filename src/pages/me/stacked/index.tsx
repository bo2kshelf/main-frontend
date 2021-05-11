import {NextPage} from 'next';
import React from 'react';
import {withPageAuthenticated} from '~/hoc/withPageAuthenticated';
import {withPageRegistered} from '~/hoc/withPageRegistered';

export const Page: NextPage = (props) => {
  return <div />;
};

export default withPageAuthenticated(withPageRegistered(Page));
