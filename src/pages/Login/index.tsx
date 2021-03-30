import React, { useContext, useState } from 'react';
import Layout from '../../components/Layout';
import * as S from './styles';
import TextField from '@material-ui/core/TextField';
import { Button, Typography } from '@material-ui/core';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const { handleLogin } = useContext(AuthContext);

  const handleChange = (
    ev: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const name = ev.target.name;
    const value = ev.target.value;
    switch (name) {
      case 'login':
        setLogin(value);
        break;
      case 'password':
        setPassword(value);
        break;
    }
  };

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    try {
      await handleLogin({ login, password });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <S.Container>
        <S.StyledCard>
          <S.StyledCardContent>
            <Typography variant="h5" component="h2" className="form-title">
              Login
            </Typography>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <TextField
                className="outlined-basic"
                label="Login"
                name="login"
                variant="outlined"
                onChange={handleChange}
              />
              <TextField
                className="outlined-basic"
                label="Senha"
                name="password"
                variant="outlined"
                type="password"
                onChange={handleChange}
              />
              <Button variant="contained" color="primary" type="submit">
                Entrar
              </Button>
            </form>
          </S.StyledCardContent>
        </S.StyledCard>
      </S.Container>
    </Layout>
  );
};

export default Login;
