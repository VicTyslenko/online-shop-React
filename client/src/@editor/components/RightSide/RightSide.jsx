import React from 'react';
import UpDates from './components/Updates/UpDates';
import { RightSideWrapp } from './StyledRightSide';

function RightSide() {
	return (
		<RightSideWrapp>
			<div className="">
				<h3>Updates</h3>
				<UpDates />
			</div>
			<div className="">
				<h3>Custumer Reviewer</h3>
			</div>
		</RightSideWrapp>
	);
}

export default RightSide;
