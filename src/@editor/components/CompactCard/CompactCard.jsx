import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import { CardWrapper, RadialBar, Detail } from './StyledCompactCard'
const CompactCard = ({ param }) => {
    const Png = param.png
    return (
        <CardWrapper
            backGround={param.color.backGround}
            boxShadow={param.color.boxShadow}
        >
            <RadialBar>
                <CircularProgressbar
                    value={param.barValue}
                    text={`${param.barValue}%`}
                />
            </RadialBar>
            <Detail>
                <Png />
                <span>${param.value}</span>
                <span>Last 24 hours</span>
            </Detail>
        </CardWrapper>
    )
}

export default CompactCard