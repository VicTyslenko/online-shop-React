/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line no-unused-vars, import/no-duplicates
import React from 'react';
// import { AnimateSharedLayout } from 'framer-motion';
import CompactCard from '../../../../../../CompactCard/CompactCard';
import ExpandedCard from '../../../../../../ExpandedCard/ExpandedCard';
// import 'react-circular-progressbar/dist/styles.css';
// eslint-disable-next-line import/order, import/no-duplicates
import { useState } from 'react';

function Card(props) {
	const [expanded, setExpanded] = useState(false);
	return (
		// <AnimateSharedLayout>
		<>
			{expanded ? (
				// <ExpandedCard />
				<ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
			) : (
				<CompactCard param={props} setExpanded={() => setExpanded(true)} />
			)}
		</>

		// </AnimateSharedLayout>
	);
}

export default Card;
