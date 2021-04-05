export const avoidUndefined = <T>(value: T): T =>
  JSON.parse(JSON.stringify(value));
