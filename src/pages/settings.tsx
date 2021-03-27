import {NextPage} from 'next';
import React from 'react';
import {withPageLoggedIn} from '~/lib/withPageLoggedIn';

export const Page: NextPage = (props) => <main {...props} />;
export default withPageLoggedIn(Page);
