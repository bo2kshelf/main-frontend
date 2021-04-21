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

export const LinkSettingPage: React.FC<{
  className?: string;
}> = ({...props}) => <LinkBase href="/settings" {...props} />;

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

export const LinkMeIndexPage: React.FC<{
  className?: string;
}> = ({...props}) => <LinkBase href="/me" {...props} />;
export const LinkMeHavePage: React.FC<{
  className?: string;
}> = ({...props}) => <LinkBase href="/me/have" {...props} />;
export const LinkMeReadPage: React.FC<{
  className?: string;
}> = ({...props}) => <LinkBase href="/me/read" {...props} />;
export const LinkMeReadingPage: React.FC<{
  className?: string;
}> = ({...props}) => <LinkBase href="/me/reading" {...props} />;
export const LinkMeRecordsPage: React.FC<{
  className?: string;
}> = ({...props}) => <LinkBase href="/me/records" {...props} />;
export const LinkMeStackedPage: React.FC<{
  className?: string;
}> = ({...props}) => <LinkBase href="/me/stacked" {...props} />;
export const LinkMeWishPage: React.FC<{
  className?: string;
}> = ({...props}) => <LinkBase href="/me/wish" {...props} />;
export const LinkMeLikedPage: React.FC<{
  className?: string;
}> = ({...props}) => <LinkBase href="/me/liked" {...props} />;

export const LinkRecordsIndexPage: React.FC<{
  className?: string;
  id: string;
}> = ({id, ...props}) => <LinkBase href={`/records/${id}`} {...props} />;

export const LinkBooksIndexPage: React.FC<{
  className?: string;
  id: string;
}> = ({id, ...props}) => <LinkBase href={`/books/${id}`} {...props} />;

export const LinkAuthorsIndexPage: React.FC<{
  className?: string;
  id: string;
}> = ({id, ...props}) => <LinkBase href={`/authors/${id}`} {...props} />;
export const LinkAuthorsBooksPage: React.FC<{
  className?: string;
  id: string;
}> = ({id, ...props}) => <LinkBase href={`/authors/${id}/books`} {...props} />;

export const LinkPublishersIndexPage: React.FC<{
  className?: string;
  id: string;
}> = ({id, ...props}) => <LinkBase href={`/publishers/${id}`} {...props} />;
export const LinkPublishersBooksPage: React.FC<{
  className?: string;
  id: string;
}> = ({id, ...props}) => (
  <LinkBase href={`/publishers/${id}/books`} {...props} />
);

export const LinkSeriesIndexPage: React.FC<{
  className?: string;
  id: string;
}> = ({id, ...props}) => <LinkBase href={`/series/${id}`} {...props} />;
export const LinkSeriesBooksPage: React.FC<{
  className?: string;
  id: string;
}> = ({id, ...props}) => <LinkBase href={`/series/${id}/books`} {...props} />;

export const LinkLoginPage: React.FC<{
  className?: string;
}> = ({...props}) => <LinkBase href="/login" {...props} />;
export const LinkLogoutPage: React.FC<{
  className?: string;
}> = ({...props}) => <LinkBase href="/logout" {...props} />;
