import {withPageAuthRequired} from '@auth0/nextjs-auth0';
import {NextPage} from 'next';
import React from 'react';
import {PersonalUserPage} from '~/templates/browser-side/PersonalUserPage';

export const Page: NextPage = (props) => <PersonalUserPage {...props} />;
export default withPageAuthRequired(Page);
