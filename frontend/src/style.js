import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: lightgoldenrodyellow;
`;

export const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  padding-top: 80px;
`;

export const Item = styled.span`
  font-size: 22px;
  :hover {
    background: lightgray;
  }
`;

// text-decoration: ${(props) => (props ? console.log(props) : 'none')};
