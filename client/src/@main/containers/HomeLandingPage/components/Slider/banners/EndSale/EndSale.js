import React from "react";
import { StyledLink, StyledText, StyledWrapper } from './EndSale.styles'

function EndSale( ){
 return (
    <React.Fragment>
    <img src="https://cdn.discordapp.com/attachments/1043545360498442271/1064594361121255484/photo-1519027356316-9f99e11d8bac_1.jpg" />
    <StyledWrapper>
        <StyledText>end-of-season sale</StyledText>
        <StyledLink href="/">
            <span>SH</span>OP NOW
        </StyledLink>
    </StyledWrapper>
    </React.Fragment>
 )   
}

export default EndSale