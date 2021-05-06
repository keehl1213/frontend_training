import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const InputBox = styled.div`
  display:flex;
  justify-content: space-between;
  width: 90%;

  button {
    cursor: pointer;
    font-size: 14px;
    white-space:nowrap;
    margin:0px 2px;
  }
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
  color:rgb(112, 112, 112);
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

export const TaskInfoList = styled.ul`
  width:80%;
  padding: 0px;
  margin: 0px;
  color:rgb(112, 112, 112);
`;

export const TaskInfoRow = styled.li`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  &:hover {
    background: rgb(229, 229, 229);
    button{
      display: block;
    }
  }

  button {
    display: none;
    cursor:pointer;
    white-space:nowrap;
    background: transparent;
    text-decoration: underline;
    font-size: 14px;
    font-weight: bold;
    color:rgb(112, 112, 112);
    outline: none;
    border: none;
  }

`;

export const TaskInfoName = styled.p`
  text-decoration: ${(props) => (props.isFinish ? "line-through" : "none")}
  overflow: auto;
`;

export const TaskInfoBlock = styled.div`
  display:flex;
  justify-content: center;
`;

export const TaskInfoDate = styled.p`
  text-align: right;
`;
