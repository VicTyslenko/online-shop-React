import React from 'react';
import { StyledLink, StyledText, StyledWrapper } from './EnjoyOff.styles'

function EnjoyOff() {
	return (
		<React.Fragment>
			<img src="https://cdn.discordapp.com/attachments/1043545360498442271/1064594366951338014/photo-1513373319109-eb154073eb0b_1.jpg" />
			<StyledWrapper>
				<StyledText>enjoy 70% off</StyledText>
				<StyledLink href="/">
					<span>SH</span>OP NOW
				</StyledLink>
			</StyledWrapper>
		</React.Fragment>
	);
}

export default EnjoyOff