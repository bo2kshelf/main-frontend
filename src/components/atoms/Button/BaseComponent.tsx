import clsx from 'clsx';
import React from 'react';
import {IconComponentType} from '~/components/atoms/Icon';

export type BaseComponentProps = {
  className?: string;
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  children,
}) => (
  <button type="button" className={clsx(className)}>
    {children}
  </button>
);

export type NormalButtonBaseProps = {
  className?: string;
} & (
  | {Icon: IconComponentType; text: undefined}
  | {Icon: undefined; text: string}
  | {Icon: IconComponentType; text: string}
);
export const NormalButtonBase: React.FC<NormalButtonBaseProps> = ({
  className,
  ...props
}) => (
  <BaseComponent
    className={clsx(className, 'py-2', 'px-4', 'rounded', 'group')}
  >
    {props?.Icon && <props.Icon />}
    {props?.text && (
      <span className={clsx(['font-bold', {'ml-2': Boolean(props.Icon)}])}>
        {props.text}
      </span>
    )}
  </BaseComponent>
);
