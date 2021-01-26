import {NextPage} from 'next';
import React from 'react';
import {withPageAuthRequired} from '~/auth';

export const Page: NextPage = (props) => <main {...props} />;
export default withPageAuthRequired(Page);
