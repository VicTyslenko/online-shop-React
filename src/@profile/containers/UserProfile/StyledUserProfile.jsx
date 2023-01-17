import styled from "styled-components";
import { Button } from "@mui/material";

export const FlexWrapp = styled.div`
display: flex;
align-items:center ;
gap:48px;
`
export const StyledButton = styled(Button)`
&&&{background-color:black;
color:white ;
width:100% ;
/* padding:50px 154px 50px 40px ; */
/* display: flex;
align-items:center ;
gap:20px; */
/* min-height: 162.5px; */
height:fit-content ;
/* padding:50px 0 0 40px ; */
};
& .content{
    text-align:left ;
}
& .title{
    /* font-weight: 700; */
font-size: 24px;
line-height: 24px;
}
& .description{
    font-weight: 400;
font-size: 18px;
line-height: 25px;
}
`