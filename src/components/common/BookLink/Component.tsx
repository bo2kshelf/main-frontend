import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';
import {LinkBooksIndexPage} from '~/atoms/Link';
import {BookCover} from '~/components/common/BookCover';

export type ComponentProps = {
  className?: string;
  id: string;
  title: string;
  subtitle?: string;
  cover?: string;
};
const PlainComponent: React.FC<ComponentProps> = ({
  className,
  id,
  cover,
  title,
  subtitle,
}) => (
  <LinkBooksIndexPage
    id={id}
    className={clsx(className, 'relative', 'bg-gray-200')}
  >
    <BookCover
      className={clsx('cover', 'h-full')}
      title={title}
      subtitle={subtitle}
      cover={cover}
    />
  </LinkBooksIndexPage>
);

export const Component = styled(PlainComponent)`
  perspective: 400px;
  > .cover {
    transform-origin: center 5%;
    transition: transform 0.25s cubic-bezier(0.29, 0.12, 0.355, 1);
  }
  &:hover {
    > .cover {
      transform: translateZ(12px) rotateX(5deg);
    }
  }
`;
