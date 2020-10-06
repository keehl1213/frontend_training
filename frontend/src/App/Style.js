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
`;

export const Logo = styled.div` 
  display: flex;
  justify-content: center;
  text-transform:uppercase;
  font-size: 4em;
  margin-bottom: 30px;
`;

export const Desc = styled.div` 
  font-size: 1.5em;
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

export const ListRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2em;
  :hover {
    background-color: #E5E5E5;
  }
`;

export const ReviseRow = styled.div`
  text-decoration: underline;
  margin-right: 5px;
  font-weight: bold;
`;

export const ReviseBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ListText = styled.div`
  display: block;
`;
