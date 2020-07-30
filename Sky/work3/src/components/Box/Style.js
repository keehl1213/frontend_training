import styled from "styled-components";

const getHeight = ({ height }) => `height: ${height}`;

export const Box = styled.div`
margin: 5px 0 0 0;
display:flex;
flex-wrap:wrap;
flex-direction:row;
align-content:flex-start;
border: 1px solid #00000026;
border-radius: 4px;
${getHeight}

`;
