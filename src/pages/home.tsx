import clsx from 'clsx';
import React from 'react';
import {useCurrentUserPageQuery} from '~/graphql/codegen/apollo';
import {withPageAuthenticated} from '~/hoc/withPageAuthenticated';

export function Page() {
  const {data} = useCurrentUserPageQuery();

  return (
    <div className={clsx()}>
      <p>Index</p>
    </div>
  );
}

export default withPageAuthenticated(Page);
