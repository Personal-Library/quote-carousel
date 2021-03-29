import React from 'react';
import styled from 'styled-components';
import { reviewData } from './assets/reviewData';

const Card = styled.div`
	width: 600px;
	height: 300px;
  padding: 0 2rem;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
  margin: 1rem;
`;

const Review = styled.p`
	text-align: center;
  margin: 0.5rem;
`;
const Author = styled.p`
	text-align: center;
  margin: 0.5rem;
`;

const CarouselCard = ({ idx }) => {

	return (
		<Card>
			<Review>{reviewData[idx].review}</Review>
			<Author>{reviewData[idx].name}</Author>
		</Card>
	);
};

export default CarouselCard;
