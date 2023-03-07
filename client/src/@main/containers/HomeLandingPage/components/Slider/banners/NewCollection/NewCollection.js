import React from 'react';
import { StyledLink, StyledText, StyledWrapper } from './NewCollection.styles'

function NewCollection() {
return (
	<React.Fragment>
		<img src="https://cdn.discordapp.com/attachments/1043545360498442271/1064594349867925524/photo-1483118714900-540cf339fd46_1.jpg" />
		<StyledWrapper>
			<StyledText>new collection</StyledText>
			<StyledLink href="/store/man">
				<span>SH</span>OP NOW
			</StyledLink>
		</StyledWrapper>
	</React.Fragment>
)
}

export default NewCollection;
