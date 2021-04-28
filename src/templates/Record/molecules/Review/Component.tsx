import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';

export type ComponentProps = {
  className?: string;
  review?: string;
};
export const Component: React.VFC<ComponentProps> = ({className, review}) => {
  const {t} = useTranslation();
  return (
    <div className={clsx(className, 'py-2')}>
      {!review && (
        <p className={clsx('text-gray-400')}>
          {t('投稿された感想はありません．')}
        </p>
      )}
      {Boolean(review) && <p className={clsx('leading-relaxed')}>{review}</p>}
    </div>
  );
};
