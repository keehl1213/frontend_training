import styled from "styled-components";

const getBackground = ({ color }) => `background: ${color}`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 20px;
  height: 50px;
  color: #707070;
  ${getBackground}
`;

export const Done = styled.div`
  text-decoration: line-through;
`;

export const Time = styled.div`
  font-weight: bold;
`;

export const Button = styled.button`
  padding: 0;
  margin: 0 0 0 25px;
  border: 0;
  background: transparent;
  color: #707070;
  font-size: 110%;
  font-weight: bold;
  text-decoration: underline;
`;
