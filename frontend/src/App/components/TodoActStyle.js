import styled from 'styled-components';

export const ReviseBox = styled.div`
  display: none;
  font-weight: bold;
  .reviseRow {
    border-style: none;
    text-decoration: underline;
    font-size: 1em;
    padding: 0px;
    font-weight: bold;
    background-color: transparent;
    color:gray;
    :not(:last-child){
      margin-right: 10px;
    }
  }
`;

export const ListRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 2em;
  :hover {
    background-color: #E5E5E5;
    ${ReviseBox} {
      display: block;
    }
  }
`;

export const ListText = styled.div`
  display: block;
`;

export const DoneTimeBox = styled.div`
  font-weight: bold;
`;

export const Item = styled.div`
  width: 100%;
`;
