import styled from "styled-components";

const getHeight = ({ height }) => `height: ${height}`;

export const Box = styled.div`
display:flex;
justify-content:center;
align-items:center;
${getHeight}

`;
