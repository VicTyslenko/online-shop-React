import React from 'react'
import { AnimateSharedLayout } from 'framer-motion'
import CompactCard from '../CompactCard/CompactCard'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from 'react'
const Card = (props) => {
    const [expanded, setExpanded] = useState(false)
    return (
        <AnimateSharedLayout>
            {expanded ? (
                // <ExpandedCard />
                'Expanded'

            ) : <CompactCard param={props} />
            }
        </AnimateSharedLayout>



    )
}

export default Card