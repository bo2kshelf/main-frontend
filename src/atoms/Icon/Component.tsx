import {
  faBook,
  faBookmark,
  faBookOpen,
  faEye,
  faHeart,
  faLayerGroup,
  faPenNib,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

export type ComponentProps = {className?: string};
export type ComponentType = React.FC<ComponentProps>;
export const IconRecord: ComponentType = ({className}) => (
  <FontAwesomeIcon className={clsx(className)} fixedWidth icon={faPenNib} />
);
export const IconReadingBooks: ComponentType = ({className}) => (
  <FontAwesomeIcon className={clsx(className)} fixedWidth icon={faBookOpen} />
);
export const IconHaveBooks: ComponentType = ({className}) => (
  <FontAwesomeIcon className={clsx(className)} fixedWidth icon={faBook} />
);
export const IconReadBooks: ComponentType = ({className}) => (
  <FontAwesomeIcon className={clsx(className)} fixedWidth icon={faBookmark} />
);
export const IconStackedBooks: ComponentType = ({className}) => (
  <FontAwesomeIcon className={clsx(className)} fixedWidth icon={faLayerGroup} />
);
export const IconWishReadBooks: ComponentType = ({className}) => (
  <FontAwesomeIcon className={clsx(className)} fixedWidth icon={faEye} />
);
export const IconLikedBooks: ComponentType = ({className}) => (
  <FontAwesomeIcon className={clsx(className)} fixedWidth icon={faHeart} />
);
