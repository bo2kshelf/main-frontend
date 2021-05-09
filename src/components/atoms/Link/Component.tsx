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

export const LinkUsersHaveIndexPage: React.FC<{
  className?: string;
  username: string;
}> = ({username, ...props}) => (
  <LinkBase href={`/users/${username}/have`} {...props} />
);
export const LinkUsersHaveNumberedPage: React.FC<{
  className?: string;
  username: string;
  number: number;
}> = ({username, number, ...props}) => (
  <LinkBase href={`/users/${username}/have/${number}`} {...props} />
);

export const LinkUsersReadIndexPage: React.FC<{
  className?: string;
  username: string;
}> = ({username, ...props}) => (
  <LinkBase href={`/users/${username}/read`} {...props} />
);
export const LinkUsersReadNumberedPage: React.FC<{
  className?: string;
  username: string;
  number: number;
}> = ({username, number, ...props}) => (
  <LinkBase href={`/users/${username}/read/${number}`} {...props} />
);

export const LinkUsersReadingIndexPage: React.FC<{
  className?: string;
  username: string;
}> = ({username, ...props}) => (
  <LinkBase href={`/users/${username}/reading`} {...props} />
);
export const LinkUsersReadingNumberedPage: React.FC<{
  className?: string;
  username: string;
  number: number;
}> = ({username, number, ...props}) => (
  <LinkBase href={`/users/${username}/reading/${number}`} {...props} />
);

export const LinkUsersRecordsIndexPage: React.FC<{
  className?: string;
  username: string;
}> = ({username, ...props}) => (
  <LinkBase href={`/users/${username}/records`} {...props} />
);
export const LinkUsersRecordsNumberedPage: React.FC<{
  className?: string;
  username: string;
  number: number;
}> = ({username, number, ...props}) => (
  <LinkBase href={`/users/${username}/records/${number}`} {...props} />
);

export const LinkUsersStackedIndexPage: React.FC<{
  className?: string;
  username: string;
}> = ({username, ...props}) => (
  <LinkBase href={`/users/${username}/stacked`} {...props} />
);
export const LinkUsersStackedNumberedPage: React.FC<{
  className?: string;
  username: string;
  number: number;
}> = ({username, number, ...props}) => (
  <LinkBase href={`/users/${username}/stacked/${number}`} {...props} />
);

export const LinkUserWishIndexPage: React.FC<{
  className?: string;
  username: string;
}> = ({username, ...props}) => (
  <LinkBase href={`/users/${username}/wish`} {...props} />
);
export const LinkUserWishNumberedPage: React.FC<{
  className?: string;
  username: string;
  number: number;
}> = ({username, number, ...props}) => (
  <LinkBase href={`/users/${username}/wish/${number}`} {...props} />
);

export const LinkUsersLikedIndexPage: React.FC<{
  className?: string;
  username: string;
}> = ({username, ...props}) => (
  <LinkBase href={`/users/${username}/liked`} {...props} />
);
export const LinkUsersLikedNumberedPage: React.FC<{
  className?: string;
  username: string;
  number: number;
}> = ({username, number, ...props}) => (
  <LinkBase href={`/users/${username}/liked/${number}`} {...props} />
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
}> = ({...props}) => <LinkBase href="/auth" {...props} />;
export const LinkLogoutPage: React.FC<{
  className?: string;
}> = ({...props}) => <LinkBase href="/logout" {...props} />;
