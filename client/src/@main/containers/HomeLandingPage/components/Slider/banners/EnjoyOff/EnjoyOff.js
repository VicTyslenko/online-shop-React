import React from 'react';
import { Link } from 'react-router-dom';
import { StyledDiv, StyledText, StyledWrapper } from './EnjoyOff.styles'

function EnjoyOff() {
	return (
		<Link to="/store/man">
			<img src="https://cdn.discordapp.com/attachments/1043545360498442271/1064594366951338014/photo-1513373319109-eb154073eb0b_1.jpg" />
			<StyledWrapper>
				<StyledText>enjoy 70% off</StyledText>
				<StyledDiv >
					<span>SH</span>OP NOW
				</StyledDiv>
			</StyledWrapper>
		</Link>
	);
}

export default EnjoyOff
