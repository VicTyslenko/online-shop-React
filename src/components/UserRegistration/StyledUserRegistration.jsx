import styled from "styled-components";

import { Button } from "@mui/material";

export const Container = styled.div`
width:100% ;
display: flex;
justify-content:center ;
background-color:black ;
`
export const LoginWrapper = styled.div`
min-width:455px ;
margin-top:168px ;
margin-bottom:292px ;
`
export const HeadWrapp = styled.div`
display: flex;
justify-content:space-evenly ;
align-items:center ;
margin-bottom:53px ;
& .login{
    font-weight: 400;
font-size: 18px;
line-height: 18px;
font-family: 'Josefin Sans';
color: #E5E5E5;
margin:0 ;
}


& .login-wrapp{
    display: flex;
    flex-direction:column ;
    align-items:center ;
    gap:3px
}
& hr{
    width: 223px;
    margin:0  ;
height: 1px;
background-color:#737272 ;
border:none ;
margin-top:5px ;
}
/* & .login::after{
content:'' ;
display: block;
width: 223px;
height: 1px;
background: #737272;
} */
`
export const ButtonWrapp = styled.div`
display: flex;
justify-content:center ;
margin-top:107px ;
`
export const StyledButton = styled(Button)`
 
&&&{
    background: #E5E5E5;
    color: #000000;
    font-weight: 400;
font-size: 18px;
line-height: 25px;
font-family: 'Open Sans';
}
`

export const InputsWrapp = styled.div`
display: flex;
flex-direction:column ;
& .first,
  .second,
   .email{
    margin-bottom:37px ;
   }
   & .password{
    margin-bottom:29px ;
   }

& .head{
    color:white ;
    margin:0 ;
    justify-self:flex-start ;
    font-weight: 700;
font-size: 12px;
line-height: 16px;
color: #E5E5E5;
text-transform: uppercase;
font-family: 'Open Sans';
}
`
export const RadioWrapp = styled.div`
margin-top:55px ;
margin-left:-8px ;
display: flex;
gap:15px;
& p{
    color: #847A7A;
    font-weight: 400;
font-size: 12px;
line-height: 16px;
}
`