import React from 'react';
import styled from 'styled-components';
import { reviewData } from './assets/reviewData';

const Card = styled.div`
	width: 80%;
	height: 60%;
  padding: 0 2rem;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Review = styled.p`
	text-align: center;
  margin: 0.5rem;
`;
const Author = styled.p`
	text-align: center;
  margin: 0.5rem;
`;

const CarouselCard = () => {
	return (
		<Card>
			<Review>{reviewData[0].review}</Review>
			<Author>{reviewData[0].name}</Author>
		</Card>
	);
};

export default CarouselCard;
