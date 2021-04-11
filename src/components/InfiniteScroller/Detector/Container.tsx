import React, {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import {Merge} from 'type-fest';
import {Component, ComponentProps} from './Component';

export type ContainerProps = Merge<ComponentProps, {onClicked(): void}>;
export const Container: React.FC<ContainerProps> = ({onClicked, ...props}) => {
  const {ref, inView} = useInView({delay: 100, threshold: 1});

  useEffect(() => {
    if (inView) onClicked();
  });

  return (
    <div ref={ref}>
      <Component {...props} />
    </div>
  );
};
