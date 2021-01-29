import {NextPage} from 'next';
import React from 'react';
import {PersonalUserPage} from '~/templates/browser-side/PersonalUserPage';

export const Page: NextPage = (props) => <PersonalUserPage {...props} />;
export default Page;
