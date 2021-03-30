import React, { useState } from 'react';
import Layout from '../../components/Layout';
import * as S from './styles';
import TextField from '@material-ui/core/TextField';
import { Button, Typography } from '@material-ui/core';
import api from '../../services/api';
import { useLocation } from 'react-router';

const UpdateUsers = () => {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const { state } = useLocation();

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

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const id = (state as { id: string }).id;
    await api.put(`/edit-user/${id}`, { name, login, password });
  };

  return (
    <Layout>
      <S.Container>
        <S.StyledCard>
          <S.StyledCardContent>
            <Typography variant="h5" component="h2" className="form-title">
              Atualizar
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
                Atualizar
              </Button>
            </form>
          </S.StyledCardContent>
        </S.StyledCard>
      </S.Container>
    </Layout>
  );
};

export default UpdateUsers;
