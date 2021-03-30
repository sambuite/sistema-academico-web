import styled, { css } from 'styled-components';
import { Card, CardContent } from '@material-ui/core';

export const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  `,
);

export const StyledCard = styled(Card)(
  ({ theme }) => css`
    width: 500px;
  `,
);

export const StyledCardContent = styled(CardContent)(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;

    > .form-title {
      margin-bottom: 1rem;
    }

    form {
      display: flex;
      flex-direction: column;
      width: 100%;

      > .outlined-basic {
        margin: 0 0 1rem;
      }
    }
  `,
);
