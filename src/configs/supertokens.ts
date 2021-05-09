/* eslint-disable no-process-env */
import EmailPassword from 'supertokens-auth-react/recipe/emailpassword';
import SessionReact from 'supertokens-auth-react/recipe/session';

export const supertokensFrontendConfig = {
  appInfo: {
    appName: process.env.SUPERTOKENS_APP_NAME!,
    websiteDomain: process.env.WEBSITE_DOMAIN!,
    apiDomain: process.env.API_DOMAIN!,
  },
  recipeList: [
    SessionReact.init(),
    EmailPassword.init({
      emailVerificationFeature: {mode: 'REQUIRED'},
    }),
  ],
};
