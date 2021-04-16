import clsx from 'clsx';
import React from 'react';

export type ComponentProps = {
  className?: string;

  i18n: Record<'label', string>;

  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
  placeholder?: string;

  onChange: React.ChangeEventHandler<HTMLInputElement>;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  i18n,
  onChange,
  type = 'text',
  placeholder,
}) => (
  <label className={clsx(className, 'flex', 'flex-col')}>
    <span className={clsx('text-sm', 'text-gray-500', 'mb-2')}>
      {i18n.label}
    </span>
    <input
      className={clsx('px-4', 'py-2', 'shadow')}
      aria-label={i18n.label}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  </label>
);
