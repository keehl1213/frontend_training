import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: gray;  
  font-family: Arial;
`;

export const Header = styled.div`
  margin-bottom: 30px;
  h1 {
    margin: 0;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    text-transform:uppercase;
    font-size: 4em;
    font-weight: lighter;
  }
  h2 {
    font-weight: lighter;
    margin: 0;
  }
`;

export const TextDelete = styled.div`
  text-decoration: line-through;
`;

export const ContentBox = styled.div` 
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const AddList = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  margin-bottom: 10px;
  .inputBox {
    width: 100%;
    height: 2em;
    border-style: none;  
    border-bottom: 1.5px gray solid;
    background-color: transparent;
  }
  .addButton {
    border-style:none;
    background-color: white;
    border: 1.5px gray solid;
    width: 5%; 
  }
`;

export const ListBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const ListShow = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DoneTimeBox = styled.div`
  font-weight: bold;
`;

export const Revise = styled.div`
  text-decoration: underline;
  font-weight: bold;
  :not(:last-child){
    margin-right: 10px;
  }
`;

export const ListText = styled.div`
  display: block;
`;
