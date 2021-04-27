import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
  faBarcode,
  faBook,
  faBookmark,
  faBookOpen,
  faBuilding,
  faCalendarAlt,
  faCogs,
  faExclamationTriangle,
  faEye,
  faHeart,
  faLanguage,
  faLayerGroup,
  faPenNib,
  faSignInAlt,
  faSignOutAlt,
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
export const IconWishBooks: ComponentType = ({className}) => (
  <FontAwesomeIcon className={clsx(className)} fixedWidth icon={faEye} />
);
export const IconLikedBooks: ComponentType = ({className}) => (
  <FontAwesomeIcon className={clsx(className)} fixedWidth icon={faHeart} />
);
export const IconSettings: ComponentType = ({className}) => (
  <FontAwesomeIcon className={clsx(className)} fixedWidth icon={faCogs} />
);
export const IconLogin: ComponentType = ({className}) => (
  <FontAwesomeIcon className={clsx(className)} fixedWidth icon={faSignInAlt} />
);
export const IconLogout: ComponentType = ({className}) => (
  <FontAwesomeIcon className={clsx(className)} fixedWidth icon={faSignOutAlt} />
);
export const IconISBN: ComponentType = ({className}) => (
  <FontAwesomeIcon className={clsx(className)} fixedWidth icon={faBarcode} />
);
export const IconPublisher: ComponentType = ({className}) => (
  <FontAwesomeIcon className={clsx(className)} fixedWidth icon={faBuilding} />
);
export const IconPages: ComponentType = ({className}) => (
  <FontAwesomeIcon className={clsx(className)} fixedWidth icon={faBook} />
);
export const IconPublishedAt: ComponentType = ({className}) => (
  <FontAwesomeIcon
    className={clsx(className)}
    fixedWidth
    icon={faCalendarAlt}
  />
);
export const IconLanguage: ComponentType = ({className}) => (
  <FontAwesomeIcon className={clsx(className)} fixedWidth icon={faLanguage} />
);

export const IconWarning: ComponentType = ({className}) => (
  <FontAwesomeIcon
    className={clsx(className)}
    fixedWidth
    icon={faExclamationTriangle}
  />
);

export const IconLeft: ComponentType = ({className}) => (
  <FontAwesomeIcon className={clsx(className)} fixedWidth icon={faAngleLeft} />
);
export const IconDoubleLeft: ComponentType = ({className}) => (
  <FontAwesomeIcon
    className={clsx(className)}
    fixedWidth
    icon={faAngleDoubleLeft}
  />
);

export const IconRight: ComponentType = ({className}) => (
  <FontAwesomeIcon className={clsx(className)} fixedWidth icon={faAngleRight} />
);
export const IconDoubleRight: ComponentType = ({className}) => (
  <FontAwesomeIcon
    className={clsx(className)}
    fixedWidth
    icon={faAngleDoubleRight}
  />
);
