import {NextPage} from 'next';
import React from 'react';
import {withPageAuthenticated} from '~/hoc/withPageAuthenticated';

export const Page: NextPage = (props) => <main {...props} />;
export default withPageAuthenticated(Page);
