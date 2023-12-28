import styled from "styled-components";

export const Button=styled.button`
min-width:220px;
color:white;
border-radius:5px;
padding: 10px 18px;
border:none;
background:#000000;
font-size:16px;
border-color:1px solid transparent;
transition:0.4s background ease-in;
cursor:pointer;

&:hover{
   background-color:white;
   border:2px solid black;
   color:black;
   transition:0.3s background ease-in;
}

`;

export const OutlineButton=styled(Button)`
background-color:white;
color:black;
border:1px solid black;

:hover{
    background-color:black;
    border:2px solid transparent;
    color:white;
 }
`;