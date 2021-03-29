import React from 'react';
import styled from 'styled-components';
import CarouselCard from './CarouselCard';

const Section = styled.section`
	width: 100%;
	height: 400px;
	background-color: #eeeeee;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Carousel = () => {
	return (
		<Section>
			<CarouselCard />
		</Section>
	);
};

export default Carousel;
