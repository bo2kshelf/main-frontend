import clsx from 'clsx';
import React from 'react';

export type ContainerProps = {
  className?: string;
  title: string;
  value: string;
  placeholder: string;
  a11y: string;
  handler: React.InputHTMLAttributes<HTMLInputElement>['onChange'];
};
export const Container: React.FC<ContainerProps> = ({
  className,
  title,
  placeholder,
  a11y,
  value,
  handler,
}) => (
  <label className={clsx(className, 'flex', 'flex-col')}>
    <span
      id={a11y}
      className={clsx(
        'text-sm',
        'tracking-wide',
        'font-bold',
        'text-gray-500',
        'mb-1',
      )}
    >
      {title}
    </span>
    <input
      className={clsx('text-lg', 'bg-gray-50', 'py-1', 'px-3')}
      aria-labelledby={a11y}
      type="text"
      value={value}
      onChange={handler}
      placeholder={placeholder}
    />
  </label>
);
