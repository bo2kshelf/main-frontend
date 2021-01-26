import {NextPage} from 'next';
import React from 'react';
import {withPageAuthRequired} from '~/auth';
import {PersonalUserPage} from '~/templates/browser-side/PersonalUserPage';

export const Page: NextPage = (props) => <PersonalUserPage {...props} />;
export default withPageAuthRequired(Page);
