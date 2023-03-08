import React from "react";
import { Link } from "react-router-dom";
import { StyledDiv, StyledText, StyledWrapper } from './EndSale.styles'

function EndSale( ){
 return (
    <Link to="/store/man">
		<img src="https://cdn.discordapp.com/attachments/1043545360498442271/1064594361121255484/photo-1519027356316-9f99e11d8bac_1.jpg" />
		<StyledWrapper>
			<StyledText>end-of-season sale</StyledText>
			<StyledDiv>
				<span>SH</span>OP NOW
			</StyledDiv>
		</StyledWrapper>
    </Link>
 )
}

export default EndSale;
