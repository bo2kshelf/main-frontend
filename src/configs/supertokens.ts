/* eslint-disable no-process-env */
import EmailPassword from 'supertokens-auth-react/recipe/emailpassword';
import SessionReact from 'supertokens-auth-react/recipe/session';
import EmailPasswordNode from 'supertokens-node/recipe/emailpassword';
import SessionNode from 'supertokens-node/recipe/session';

const appInfo = {
  appName: process.env.SUPERTOKENS_APP_NAME!,
  websiteDomain: process.env.WEBSITE_DOMAIN!,
  apiDomain: process.env.WEBSITE_DOMAIN!,
  apiBasePath: '/api/auth/',
};

export const supertokensFrontendConfig = {
  appInfo,
  recipeList: [
    SessionReact.init(),
    EmailPassword.init({
      emailVerificationFeature: {mode: 'REQUIRED'},
    }),
  ],
};

export const supertokensBackendConfig = {
  supertokens: {
    connectionURI: process.env.SUPERTOKENS_CONNECTION_URI!,
  },
  appInfo,
  recipeList: [SessionNode.init(), EmailPasswordNode.init()],
};
