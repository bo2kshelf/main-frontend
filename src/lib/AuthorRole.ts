import {AuthorRole} from '~/graphql/api-public/codegen/graphql-request';

export {AuthorRole} from '~/graphql/api-public/codegen/graphql-request';

export const rolesPriorities: Record<AuthorRole, number> = {
  [AuthorRole.Author]: 0,
  [AuthorRole.OriginalAuthor]: 100,
  [AuthorRole.Supervisor]: 101,
  [AuthorRole.Participant]: 102,
  [AuthorRole.Editor]: 103,
  [AuthorRole.Illustrator]: 200,
  [AuthorRole.ComicArtist]: 201,
  [AuthorRole.Translator]: 300,
  [AuthorRole.TranslateSupervisor]: 301,
};

export const rolesPriorityComparer = (
  fir: AuthorRole,
  sec: AuthorRole,
): number => {
  return rolesPriorities[fir] - rolesPriorities[sec];
};

export const authorsComparerByRoles = (
  fir: {roles: AuthorRole[]},
  nex: {roles: AuthorRole[]},
): number => {
  return (
    rolesPriorities[[...fir.roles].sort(rolesPriorityComparer)[0]] -
    rolesPriorities[[...nex.roles].sort(rolesPriorityComparer)[0]]
  );
};
