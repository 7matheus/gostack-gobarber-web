import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isValid: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #232129;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: #f99000;
      border-color: #f99000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #f99000;
    `}

  ${(props) =>
    props.isValid &&
    css`
      color: #f22;
      border-color: #f22;
    `}

  input {
    flex: 1;

    background: transparent;
    border: 0;

    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #f22;
    color: #fff;

    &::before {
      border-color: #f22 transparent;
    }
  }
`;
