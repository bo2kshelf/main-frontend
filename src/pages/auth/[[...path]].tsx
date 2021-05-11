import dynamic from 'next/dynamic';
import React, {useEffect} from 'react';
import SuperTokens from 'supertokens-auth-react';
import {redirectToAuth} from 'supertokens-auth-react/recipe/thirdparty';

const SuperTokensComponentNoSSR = dynamic(
  async () => SuperTokens.getRoutingComponent as () => JSX.Element,
  {ssr: false},
);

export default function Auth() {
  useEffect(() => {
    if (!SuperTokens.canHandleRoute()) redirectToAuth();
  }, []);

  return <SuperTokensComponentNoSSR />;
}
