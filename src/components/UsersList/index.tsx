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
  TableFooter,
  TablePagination,
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

  const [pageCurrent, setPageCurrent] = useState(0);

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
        const { data } = await api.get(`/users?skip=3&take=${pageCurrent * 3}`);
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    listUsers();
  }, [pageCurrent]);

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
          <TableFooter>
            <TableRow>
              <TablePagination
                count={-1}
                rowsPerPage={3}
                page={pageCurrent}
                onChangePage={(ev, page) => {
                  setPageCurrent(page);
                }}
                rowsPerPageOptions={[0]}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </S.Container>
  );
};

export default UsersList;
