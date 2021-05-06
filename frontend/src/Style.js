import styled from 'styled-components';

export const Body = styled.div`
  background: lightgray;
  font-family: Arial, Helvetica, sans-serif;
  height: 100vh;
  width: 100vw;
  margin: -10px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const Title = styled.div`
  font-size: 48px;
  color: rgb(112, 112, 112);
  padding: 10px 0px;
`;

export const TitleComment = styled.div`
  font-size: 16px;
  color: rgb(112, 112, 112);
  padding: 10px;
`;

export const Main = styled.div`
  background: lightgray;
  margin: 10px 0px;
  display:flex;
  flex-direction: column;
  align-items: center;
`;
