import clsx from 'clsx';
import React from 'react';
import {SignUpForm, SignUpFormProps} from '~/components/SignUpForm';

export type ComponentProps = {
  className?: string;
  userId: SignUpFormProps['userId'];
  initialValues: SignUpFormProps['initialValues'];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  userId,
  initialValues,
}) => (
  <main className={clsx(className, 'flex', 'justify-center')}>
    <SignUpForm
      className={clsx('w-full', 'max-w-screen-sm')}
      userId={userId}
      initialValues={initialValues}
    />
  </main>
);
