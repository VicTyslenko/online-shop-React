/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { ExpandedCardWrapper } from './StyledExpandedCard';
// import { Chart } from 'apexcharts'
// import { motion } from 'framer-motion'
// import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined ';
// eslint-disable-next-line react/prop-types
function ExpandedCard({ param, setExpanded }) {
	// from documentation:
	// const data = {
	//     options: {
	//         chart: {
	//             type: 'area',
	//             height: 'auto'

	//         },
	//         dropShadow: {
	//             enabled: false,
	//             enabledOnSeries: undefined,
	//             top: 0,
	//             left: 0,
	//             blur: 3,
	//             color: '#000',
	//             opacity: 0.35
	//         },
	//         fill: {
	//             colors: ['#fff'],
	//             type: 'gradient'
	//         }
	//     }
	// }
	return (
		// eslint-disable-next-line react/prop-types
		<ExpandedCardWrapper backGround={param.color.backGround}>
			<CancelOutlinedIcon onClick={setExpanded} className="close-icon" />

			{/* // eslint-disable-next-line react/prop-types  */}
			<span>{param.title}</span>
			<div className="chart-container">
				{/* <Chart series={param.series} type='area'
                    options={data.options}
                    
                /> */}
				Here will be Charts and Graphics
			</div>
			<span>Last 24 hours</span>
		</ExpandedCardWrapper>
	);
}

export default ExpandedCard;
