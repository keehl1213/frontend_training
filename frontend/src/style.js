import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FBF5F5;
  font-family: "Microsoft JhengHei UI", sans-serif;
  color: #6E6C6C;
  *{margin: 0;
    padding: 0;
  }
`;

export const Title = styled.div`
  width: fit-content;
  margin: 0 auto;
  padding-top: 30px;
`;

export const TitleLeft = styled.span`
  font-size: 75px;
  text-align: center;
  font-weight: lighter;
`;

export const TitleRight = styled.span`
  font-size: 75px;
  text-align: center;
  font-weight: bold;
`;

export const Subtitle = styled.h3`
  font-size: 25px;
  text-align: center;
  margin-top: 30px;
  font-weight: normal;
`;

export const TodoList = styled.div`
  width: 95%;
  height: 100%;
  margin: 0 auto;
  font-size: 20px;
  padding-bottom: 100px;
`;

export const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  margin-top: 30px;
`;

export const InputArea = styled.input`
  width: 92%;
  padding: 5px 0;
  outline: none;
  border: none;
  background-color: transparent;
  border-bottom: #6E6C6C 1px solid;
  color: #6E6C6C;
  font-size: 20px;
  ::placeholder {
    color: #E1DCDC;
  }
`;

export const AddButton = styled.button`
  width: 7%;
  padding: 5px 0;
  outline: none;
  background-color: white;
  border: #6E6C6C 1px solid;
  color: #6E6C6C;
  font-size: 20px;
`;

export const ControlBar = styled.div`
  width: 90%;
  margin: 20px auto 0 auto;
  display: flex;
`;

export const ItemNum = styled.span`
  flex: 3;
`;

export const ShowAllLabel = styled.label`
  flex: 1;
  text-align: end;
  display: block;
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  margin: 4px 5px 0 0;
`;

export const TodoItem = styled.div`
  width: 90%;
  margin: 20px auto 0 auto;
  padding: 5px;
  display: flex;
  :hover {
    background: #E1DCDC;
  }
`;

export const ItemText = styled.p`
  word-wrap:break-word; 
  word-break:break-all;
  flex: ${(props) => (props.todo.isCompleted === true ? '2' : '3')};
  padding-left: 5px;
  text-decoration: ${(props) => (props.todo.isCompleted === true ? 'line-through' : 'none')};
`;

export const ItemCompleteTime = styled.p`
  flex: 1;
  font-weight: bold;
  text-align: end;
  font-size: 18px;
  display: ${(props) => (props.todo.isCompleted === true ? 'inline-block' : 'none')};
`;

export const ButtonArea = styled.div`
  flex: 1;
  display: ${(props) => (props.todo.isCompleted === true ? 'none' : 'inline-block')};
`;

export const ItemButton = styled.button`
  width: 50%;
  outline: none;
  border: 0;
  text-decoration: underline;
  background-color: transparent;
  color: #6E6C6C;
  font-weight: bold;
  font-size: 18px;
  text-align: end;
`;
