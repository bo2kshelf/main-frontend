import {NextPage} from 'next';
import React from 'react';
import {withPageSignedIn} from '~/lib/withPageSignedIn';

export const Page: NextPage = (props) => {
  return <div />;
};

export default withPageSignedIn(Page);
