import React from 'react';
// import { AnimateSharedLayout } from 'framer-motion';
import CompactCard from '../../../../../../CompactCard/CompactCard';
import ExpandedCard from '../../../../../../ExpandedCard/ExpandedCard';
// import 'react-circular-progressbar/dist/styles.css';
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
