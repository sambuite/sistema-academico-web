import { MouseEvent, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { AppBar, Menu, MenuItem, Toolbar } from '@material-ui/core';

import * as S from './styles';

const HeaderMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <S.Container>
      <div className="wrapper">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Sistema Acadêmico</Typography>
            <div>
              <S.ButtonStyled
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                Páginas
              </S.ButtonStyled>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <S.LinkStyled to="/register-users">
                  <MenuItem onClick={handleClose}>Cadastrar</MenuItem>
                </S.LinkStyled>
                <S.LinkStyled to="/list-users">
                  <MenuItem onClick={handleClose}>Listar</MenuItem>
                </S.LinkStyled>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </S.Container>
  );
};

export default HeaderMenu;
