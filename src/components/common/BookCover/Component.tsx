import clsx from 'clsx';
import NextImage from 'next/image';
import React from 'react';

export type ComponentProps = {
  className?: string;
  title: string;
  cover: string | null;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  cover,
  title,
}) => (
  <div className={clsx(className, 'relative')}>
    {cover && (
      <NextImage
        className={clsx('object-contain')}
        src={cover}
        alt={title}
        layout="fill"
      />
    )}
    {!cover && (
      <div
        className={clsx(
          'w-11/12',
          'h-full',
          'bg-gray-100',
          'mx-auto',
          'p-2',
          'flex',
          'justify-center',
          'items-center',
        )}
      >
        <p className={clsx('select-all', 'text-sm')}>{title}</p>
      </div>
    )}
  </div>
);
Component.displayName = 'BookCover';
