import styled from "styled-components";

export const Todo = styled.div`
  padding: 7% 12%;
  min-height: 100vh;
  background: #F1EDED;
  font-family: sans-serif;
  box-sizing: border-box;
`;

export const Title = styled.div`
  color: #707070;
  font-size: 800%;
  text-align: center;
`;

export const SubTitle = styled.div`
  margin: 20px 0 0 0;
  color: #707070;
  font-size: 125%;
  text-align: center;
`;

export const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 62px;
  height: 50px;
  color: #707070;
`;

export const Checkbox = styled.input`
  user-select: none;
`;

export const ListContainer = styled.div`
  padding: 0 62px;
`;
