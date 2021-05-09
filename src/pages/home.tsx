import clsx from 'clsx';
import React from 'react';
import {useCurrentUserPageQuery} from '~/graphql/codegen/apollo';
import {withPageSignedIn} from '~/lib/withPageSignedIn';

export function Page() {
  const {data} = useCurrentUserPageQuery();

  return (
    <div className={clsx()}>
      <p>Index</p>
    </div>
  );
}

export default withPageSignedIn(Page);
