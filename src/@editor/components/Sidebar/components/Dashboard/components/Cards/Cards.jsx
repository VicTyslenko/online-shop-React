// eslint-disable-next-line no-unused-vars
import React from 'react';
import { CardsData } from '../../../../../../helpers/Data';
import Card from './Card';
import { CardsWrapper, ParentContainer } from './StyledCards';

function Cards() {
	return (
		<CardsWrapper>
			{CardsData.map((card, id) => (
				// eslint-disable-next-line react/jsx-key
				<ParentContainer>
					<Card
						// eslint-disable-next-line react/no-array-index-key
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
