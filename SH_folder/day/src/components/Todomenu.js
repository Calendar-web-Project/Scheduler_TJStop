import React from 'react';
import styled, { css } from 'styled-components';

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const Text2 = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const Text3 = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function Todomenu({text, text2, text3 }) {
    return (
      <Todomenu>
        <Text>{text}</Text>
        <Text2>{text2}</Text2>
        <Text3>{text3}</Text3>
      </Todomenu>
    );
  }

  export default Todomenu;