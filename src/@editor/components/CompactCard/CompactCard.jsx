/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
// import { CircularProgressbar } from 'react-circular-progressbar';
import { CardWrapper, RadialBar, Detail } from './StyledCompactCard';
import './CircularBar.scss';

// eslint-disable-next-line react/prop-types
function CompactCard({ param, setExpanded }) {
	// eslint-disable-next-line react/prop-types
	const Png = param.png;

	return (
		<CardWrapper
			// eslint-disable-next-line react/prop-types
			backGround={param.color.backGround}
			// eslint-disable-next-line react/prop-types
			boxShadow={param.color.boxShadow}
			onClick={setExpanded}
			layoutId="expandableCard"
		>
			<RadialBar>
				{/* <CircularProgressbar className="circular" value={param.barValue} text={`${param.barValue}%`} /> */}
				<span>{param.title}</span>
			</RadialBar>
			<Detail>
				<Png />
				<span>${param.value}</span>
				<span>Last 24 hours</span>
			</Detail>
		</CardWrapper>
	);
}

export default CompactCard;
