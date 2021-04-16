import clsx from 'clsx';
import React from 'react';
import {IconComponentType} from '~/components/atoms/Icon';
import {BaseComponent} from './Base';

export type NormalButtonBaseProps = {
  className?: string;
  disabled?: boolean;
} & (
  | {Icon: IconComponentType}
  | {text: string}
  | {Icon: IconComponentType; text: string}
);
export const NormalButtonBase: React.FC<NormalButtonBaseProps> = ({
  className,
  disabled,
  ...props
}) => (
  <BaseComponent
    className={clsx(className, 'py-2', 'px-4', 'rounded', 'group')}
    {...{disabled}}
  >
    {'Icon' in props && <props.Icon />}
    {'text' in props && (
      <span className={clsx(['font-bold', {'ml-2': 'Icon' in props}])}>
        {props.text}
      </span>
    )}
  </BaseComponent>
);

export const NormalButtonBlueComponent: typeof NormalButtonBase = ({
  className,
  disabled,
  ...props
}) => (
  <NormalButtonBase
    className={clsx(className, {
      'cursor-default': disabled,
      'bg-gray-300': disabled,
      'bg-blue-400': !disabled,
      'hover:bg-blue-500': !disabled,
      'text-gray-500': disabled,
      'text-white': !disabled,
    })}
    {...{disabled, ...props}}
  />
);
