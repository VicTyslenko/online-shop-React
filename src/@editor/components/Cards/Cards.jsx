import React from 'react'
import { CardsData } from '../../helpers/Data/Data'
import Card from '../Card/Card'
import { CardsWrapper, ParentContainer } from './StyledCards'
const Cards = () => {
    return (
        <CardsWrapper>
            {/* <div className='cards'> */}
            {CardsData.map((card, id) => {
                return (
                    <ParentContainer>
                        <Card
                            key={id}
                            title={card.title}
                            color={card.color}
                            barValue={card.barValue}
                            value={card.value}
                            png={card.png}
                            series={card.series}
                        />
                    </ParentContainer>
                )
            })}
        </CardsWrapper>
    )
}

export default Cards