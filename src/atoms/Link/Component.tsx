import Link from 'next/link';
import React from 'react';

const LinkBase: React.FC<{href: string; className?: string}> = ({
  href,
  className,
  children,
}) => (
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
);

export const LinkUsersIndexPage: React.FC<{
  className?: string;
  username: string;
}> = ({username, ...props}) => (
  <LinkBase href={`/users/${username}`} {...props} />
);
export const LinkUsersHavePage: React.FC<{
  className?: string;
  username: string;
}> = ({username, ...props}) => (
  <LinkBase href={`/users/${username}/have`} {...props} />
);
export const LinkUsersReadPage: React.FC<{
  className?: string;
  username: string;
}> = ({username, ...props}) => (
  <LinkBase href={`/users/${username}/read`} {...props} />
);
export const LinkUsersReadingPage: React.FC<{
  className?: string;
  username: string;
}> = ({username, ...props}) => (
  <LinkBase href={`/users/${username}/reading`} {...props} />
);
export const LinkUsersRecordsPage: React.FC<{
  className?: string;
  username: string;
}> = ({username, ...props}) => (
  <LinkBase href={`/users/${username}/records`} {...props} />
);
export const LinkUsersStackedPage: React.FC<{
  className?: string;
  username: string;
}> = ({username, ...props}) => (
  <LinkBase href={`/users/${username}/stacked`} {...props} />
);
export const LinkUserWishPage: React.FC<{
  className?: string;
  username: string;
}> = ({username, ...props}) => (
  <LinkBase href={`/users/${username}/wish`} {...props} />
);
export const LinkUsersLikedPage: React.FC<{
  className?: string;
  username: string;
}> = ({username, ...props}) => (
  <LinkBase href={`/users/${username}/liked`} {...props} />
);

export const LinkRecordsIndexPage: React.FC<{
  className?: string;
  id: string;
}> = ({id, ...props}) => <LinkBase href={`/records/${id}`} {...props} />;

export const LinkBooksIndexPage: React.FC<{
  className?: string;
  id: string;
}> = ({id, ...props}) => <LinkBase href={`/books/${id}`} {...props} />;
