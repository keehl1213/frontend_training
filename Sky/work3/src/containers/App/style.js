import styled from "styled-components";

export const Body = styled.div`
  margin: 7% 12%;
  padding: 15px;
  min-height: 100vh;
  font-family: sans-serif;
  box-sizing: border-box;
  border: 1px #000 solid;
  position: relative;
`;

export const TitleText = styled.div`
  display:flex;
  justify-content:center;
`;

const getPlacement = ({ placement }) => {
  switch (placement) {
    case 'between':
      return `justify-content: space-between`;
    case 'right':
      return `justify-content:flex-end`;
    case 'center':
      return `justify-content:center`;
    default:
      return `justify-content:flex-start`;
  }
};

export const Div = styled.div`
margin: 10px 0 0 0;
display:flex;
${getPlacement};
`;

export const Button = styled.button`
width: 40px;
color: #FFF;
background-color: #000;
border: 1px #000 solid;
border-radius: 4px;
`;

export const Ttbutton = styled.div`
border-right: 15px solid white;
border-left: 15px solid white;
border-bottom: 25px solid #000;
display:inline-block;
`;

export const Tbbutton = styled.div`
border-right: 15px solid white;
border-left: 15px solid white;
border-top: 25px solid #000;
display:inline-block;
`;

export const Icon = styled.img`
position: absolute;
top:0px;
right:0px;
width: 32px;
height: 32px;
border: transparent;
background: transparent;
`;
