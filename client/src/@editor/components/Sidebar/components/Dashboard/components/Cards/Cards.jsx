import React from 'react';
import { CardsData } from '../../../../../../helpers/Data';
import Card from './Card';
import { CardsWrapper, ParentContainer } from './StyledCards';

function Cards() {
	return (
		<CardsWrapper>
			{CardsData.map((card, id) => (
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
			))}
		</CardsWrapper>
	);
}

export default Cards;
