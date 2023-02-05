import React from 'react';
import { UpdatesData } from '../../../../helpers/Data';
import { UpDatesWrapp, Update } from './StyledUpdates';

function UpDates() {
	return (
		<UpDatesWrapp>
			{UpdatesData.map((update) => (
				<Update>
					<img src={update.img} alt="" />
					<div className="noti">
						<div className="user-info">
							<span className="user-name"> {update.name}</span>
							<span> {update.noti}</span>
						</div>
						<span> {update.time}</span>
					</div>
				</Update>
			))}
		</UpDatesWrapp>
	);
}

export default UpDates;
