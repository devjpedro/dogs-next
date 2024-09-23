'use client';

import React from 'react';

type UserType = {
  id: number;
  nome: string;
  username: string;
  email: string;
};

type IUserContext = {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};

const UserContext = React.createContext({} as IUserContext);

export const useUser = () => {
  const context = React.useContext(UserContext);

  if (context === null) {
    throw new Error('useContext deve estar dentro do Provider');
  }

  return context;
};

export function UserContextProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: UserType | null;
}) {
  const [userState, setUserState] = React.useState<UserType | null>(user);

  return (
    <UserContext.Provider
      value={{
        user: userState,
        setUser: setUserState,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
