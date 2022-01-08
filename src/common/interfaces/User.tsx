export interface User {
  email?: string;
  firstName?: string;
  lastName?: string;
  permissions?: ReadonlyArray<string>;
  identityType?: string;
}

export const getFullName = (user: User) => {
  return `${user?.firstName || ""} ${user?.lastName || ""}`;
};
