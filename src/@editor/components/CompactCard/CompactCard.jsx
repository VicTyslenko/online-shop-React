import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import { CardWrapper, RadialBar, Detail } from './StyledCompactCard'
import './CircularBar.scss'
const CompactCard = ({ param, setExpanded }) => {
    const Png = param.png;

    return (
        <CardWrapper
            backGround={param.color.backGround}
            boxShadow={param.color.boxShadow}
            onClick={setExpanded}
        >
            <RadialBar>
                <CircularProgressbar className='circular'
                    value={param.barValue}
                    text={`${param.barValue}%`}
                />
                <span>{param.title}</span>
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