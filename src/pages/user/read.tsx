import {withPageAuthRequired} from '@auth0/nextjs-auth0';
import {NextPage} from 'next';
import React from 'react';

export const Page: NextPage = (props) => <main {...props} />;
export default withPageAuthRequired(Page);
