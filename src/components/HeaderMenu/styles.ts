import styled, { css } from 'styled-components';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Container = styled.div(
  ({ theme }) => css`
    .wrapper {
      flex-grow: 1;
    }
  `,
);

export const ButtonStyled = styled(Button)(
  ({ theme }) => css`
    color: ${theme.palette.common.white};
    margin: 1rem;
  `,
);

export const LinkStyled = styled(Link)(
  ({ theme }) => css`
    color: ${theme.palette.text.primary} !important;

    &:visited,
    &:active {
      color: ${theme.palette.text.primary} !important;
    }
  `,
);
