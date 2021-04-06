import { createContext, useState, useEffect, useCallback } from 'react';

export const UserNameContext = createContext();

export const reducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return action.payload;
    case 'logout': {
      return null;
    }
    default:
      return null;
  }
};

export const useAuth = () => {
  const [user, setUser] = useState('');

  const login = useCallback((name) => {
    localStorage.setItem('userName', JSON.stringify(name));
    setUser(name);
  });

  const logout = useCallback(() => setUser(''));

  useEffect(() => {
    if (localStorage.getItem('userName')) {
      login(JSON.parse(localStorage.getItem('userName')));
    }
  }, [login]);

  return [login, logout, user];
};
