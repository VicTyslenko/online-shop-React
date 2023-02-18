import styled from 'styled-components';

export const StyledText = styled.h1`
text-transform: uppercase;
font-weight: 700;
font-size: 39px;
margin-bottom: 28px;
`

export const StyledLink = styled.a`
color: #fff;
font-size: 30px;
font-weight: 300;
text-decoration: none;
:hover {
    text-decoration: underline;
}
>span {
    text-decoration: underline;
}
`

export const StyledWrapper = styled.div`
font-family: 'Josefin Sans', sans-serif;
position: absolute;
display: flex;
flex-direction: column;
align-items: flex-end;
top: 16.5%;
left: 61%;
color: #fff;
`