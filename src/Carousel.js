import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';
import { reviewData } from './assets/reviewData';

const Carousel = () => {
	const [idx, setIdx] = useState(0);
	const [debounced, setDebounced] = useState(true);
	const endOfData = reviewData.length - 1;

	const handleDebounce = useCallback(() => {
		if (!debounced) return;
		setDebounced(false);
		setTimeout(() => {
			setDebounced(true);
		}, 200);
	}, [debounced]);

	const handleBack = () => {
		if (debounced) {
			const next = idx - 1;
			if (next < 0) setIdx(endOfData);
			else setIdx(next);
			handleDebounce();
		}
	};

	const handleForward = useCallback(() => {
		if (debounced) {
			const next = idx + 1;
			if (next > endOfData) setIdx(0);
			else setIdx(next);
			handleDebounce();
		}
	}, [debounced, endOfData, handleDebounce, idx]);

	useEffect(() => {
		const carouselTimer = setTimeout(() => {
			handleForward();
		}, 3000);

		return () => clearTimeout(carouselTimer);
	}, [handleForward]);

	return (
		<Section>
			<BsChevronLeft className='react-icons' onClick={handleBack} />
			<AnimatePresence exitBeforeEnter>
				<motion.div key={idx} initial='hidden' animate='visible' variants={list}>
					<Card>
						<Review>{reviewData[idx].review}</Review>
						<Author>{reviewData[idx].name}</Author>
					</Card>
				</motion.div>
			</AnimatePresence>
			<BsChevronRight className='react-icons' onClick={handleForward} />
		</Section>
	);
};

export default Carousel;

const list = {
	visible: {
		opacity: 1,
		y: 0,
	},
	hidden: {
		opacity: 0,
		y: -50,
	},
};

const Section = styled.section`
	width: 100%;
	height: 100%;
	background-color: #faebd7;
	display: flex;
	justify-content: center;
	align-items: center;

	.react-icons {
		cursor: pointer;
		font-size: 1.5rem;
	}

	.card-container {
		height: 300px;
		width: 700px;
	}
`;

const Card = styled.div`
	width: 500px;
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

/**
 * This carousel is fully customizable! Just bring this file into your project,
 * and make sure install the dependencies.
 * The icons are from react-icons, but can be substituted for any icon.
 * The animation library is Framer Motion and we use styled-components for CSS.
 */
