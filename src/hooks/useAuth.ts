import {useState} from 'react';

export default function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signin = async () => {
    setIsLoggedIn(true);
  };

  const signup = async () => {};

  return {signin, signup, isLoggedIn};
}
