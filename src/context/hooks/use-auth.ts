import { useState, useEffect } from 'react';
import history from '../../history';
import api from '../../services/api';
import { LoginType } from '../AuthContext';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = localStorage.getItem('@acad:auth');

    if (auth) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(auth).token}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function handleLogin(login: LoginType) {
    const { data } = await api.post('/login', { ...login });

    localStorage.setItem('@acad:auth', JSON.stringify(data));
    api.defaults.headers.Authorization = `Bearer ${data.token}`;
    setAuthenticated(true);
    history.push('/list-users');
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('@acad:auth');
    api.defaults.headers.Authorization = undefined;
    history.push('/login');
  }

  return { authenticated, loading, handleLogin, handleLogout };
}
