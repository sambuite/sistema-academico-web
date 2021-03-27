import React from 'react';
import Layout from '../../components/Layout';
import UsersList from '../../components/UsersList';
import * as S from './styles';

const ListUsers = () => {
  return (
    <Layout>
      <S.Container>
        <UsersList />
      </S.Container>
    </Layout>
  );
};

export default ListUsers;
