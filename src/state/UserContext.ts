import { createContext, useContext } from "react";

type UserContextValue = {
  username: string;
  setUsername: (username: string) => void;
};

export const UserContext = createContext<UserContextValue | undefined>(
  undefined
);

export function useUserContext(): UserContextValue {
  const context = useContext(UserContext);
  if (!context) throw new Error("…");
  return context;
}
