import styled from "styled-components";

export const Container = styled.div`
width:100% ;
display: flex;
justify-content:center ;
background-color:black ;
`
export const LoginWrapper = styled.div`
min-width:467px ;
margin-top:168px ;
margin-bottom:292px ;
`
export const HeadWrapp = styled.div`
display: flex;
justify-content:space-between ;
align-items:center ;
& p{
    font-weight: 400;
font-size: 18px;
line-height: 18px;
color: #E5E5E5;
margin:0 ;
font-family: 'Josefin Sans';
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
export const Description = styled.h2`
color:white ;
font-weight: 400;
font-size: 16px;
line-height: 16px;
margin-top:73px ;
font-family: 'Josefin Sans';
`