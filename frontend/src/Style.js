import styled from 'styled-components';

export const Body = styled.div`
  background: lightgray;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Header = styled.header`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 48px;
  color:rgb(112, 112, 112);
  padding: 10px 0px;
`;

export const TitleSpan = styled.span`
  font-size: 48px;
  color:rgb(112, 112, 112);
  padding: 10px 0px;
  font-weight:bolder;
`;

export const TitleComment = styled.div`
  font-size: 16px;
  color:rgb(112, 112, 112);
`;

export const Main = styled.div`
  margin: 10px 20px;
  display:flex;
  flex-direction: column;
  align-items: center;
`;


export const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;

export const InputBox = styled.div`
  display:flex;
  justify-content: space-between;
  width: 60%;
`;

export const Input = styled.input`
  background: lightgray;
  font-size: 14px;
  border-color: black;
  outline: none;
  border: none;
  border-bottom:1px black solid;
  width: 100%;
  margin: 0px 5px;
`;

export const TaskInfoBar = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`;

export const TaskInfoTable = styled.ul`
  width:60%;
  padding: 0px;
  margin: 0px;
  color:rgb(112, 112, 112);
`;

export const TaskInfoRow = styled.li`
  display:flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background: rgb(229, 229, 229);
    button{
      display: inline-block;
    }
  }

  button {
    display: none;
    background: transparent;
    text-decoration: underline;
    font-weight: bold;
    color:rgb(112, 112, 112);
    outline: none;
    border: none;
  }

`;

export const TaskInfoName = styled.p`
  text-decoration: ${(props) => (props.isFinish ? "line-through" : "none")}
  width: 150px;
`;

export const TaskInfoBlock = styled.div`
  display:flex;
  justify-content: center;
`;

export const TaskInfoDate = styled.p`
  text-align: right;
`;

export const TaskInfoButton = styled.button`
  background: transparent;
  text-decoration: underline;
  font-size: 16px;
  font-weight: bold;
  color:rgb(112, 112, 112);
  outline: none;
  border: none;
`;
