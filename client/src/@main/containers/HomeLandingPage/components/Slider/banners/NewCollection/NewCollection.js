import React from 'react';
import { Link } from 'react-router-dom';
import { StyledDiv, StyledText, StyledWrapper } from './NewCollection.styles'

function NewCollection() {
	return (
		<Link to="/store/man">
			<img src="https://cdn.discordapp.com/attachments/1043545360498442271/1064594349867925524/photo-1483118714900-540cf339fd46_1.jpg" />
			<StyledWrapper>
				<StyledText>new collection</StyledText>
				<StyledDiv>
					<span>SH</span>OP NOW
				</StyledDiv>
			</StyledWrapper>
		</Link>
	)
}

export default NewCollection;
