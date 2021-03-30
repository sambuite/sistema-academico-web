import { useEffect, useState } from 'react';
import * as S from './styles';
import {
  Button,
  ButtonGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import api from '../../services/api';
import { useHistory } from 'react-router';

type User = {
  id: string;
  name: string;
  login: string;
};

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([] as User[]);

  const history = useHistory();

  const handleDeleteUser = async (id: string) => {
    try {
      await api.delete(`/delete-user/${id}`);
      setUsers((old) => old.filter((e) => e.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateUser = (id: string) => {
    history.push('/update-users', {
      id,
    });
  };

  useEffect(() => {
    const listUsers = async () => {
      try {
        const { data } = await api.get('/users');
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    listUsers();
  }, []);

  return (
    <S.Container>
      <TableContainer component={Paper}>
        <Table className="table" aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="right">Login</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="right">{user.login}</TableCell>
                <TableCell align="right">
                  <ButtonGroup
                    variant="contained"
                    color="secondary"
                    aria-label="contained primary button group"
                  >
                    <Button
                      color="inherit"
                      onClick={() => handleUpdateUser(user.id)}
                    >
                      Editar
                    </Button>
                    <Button
                      color="secondary"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Deletar
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </S.Container>
  );
};

export default UsersList;
