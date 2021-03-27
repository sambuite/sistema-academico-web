import React, { useState } from 'react';
import Layout from '../../components/Layout';
import * as S from './styles';
import TextField from '@material-ui/core/TextField';
import { Button, Typography } from '@material-ui/core';

const RegisterUsers = () => {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (
    ev: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const name = ev.target.name;
    const value = ev.target.value;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'login':
        setLogin(value);
        break;
      case 'password':
        setPassword(value);
        break;
    }
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    //api
    console.log({ name, login, password });
  };

  return (
    <Layout>
      <S.Container>
        <S.StyledCard>
          <S.StyledCardContent>
            <Typography variant="h5" component="h2" className="form-title">
              Cadastro
            </Typography>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <TextField
                className="outlined-basic"
                label="Nome"
                name="name"
                variant="outlined"
                onChange={handleChange}
              />
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
                Cadastrar
              </Button>
            </form>
          </S.StyledCardContent>
        </S.StyledCard>
      </S.Container>
    </Layout>
  );
};

export default RegisterUsers;
