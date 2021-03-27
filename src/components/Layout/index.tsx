import React from 'react';
import { LayoutProps } from './types';
import * as S from './styles';
import HeaderMenu from '../HeaderMenu';

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Container>
      <HeaderMenu />
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export default Layout;
