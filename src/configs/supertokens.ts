/* eslint-disable no-process-env */
import SessionReact from 'supertokens-auth-react/recipe/session';
import ThirdParty, {Github} from 'supertokens-auth-react/recipe/thirdparty';

export const supertokensFrontendConfig = {
  appInfo: {
    appName: process.env.SUPERTOKENS_APP_NAME!,
    websiteDomain: process.env.WEBSITE_DOMAIN!,
    apiDomain: process.env.API_DOMAIN!,
  },
  recipeList: [
    SessionReact.init(),
    ThirdParty.init({
      signInAndUpFeature: {
        providers: [Github.init()],
      },
    }),
  ],
};
