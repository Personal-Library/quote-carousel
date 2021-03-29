import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import CarouselCard from './CarouselCard';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';
import { reviewData } from './assets/reviewData';

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

	const handleBackward = () => {
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
			<BsChevronLeft className='react-icons' onClick={handleBackward} />
			<AnimatePresence exitBeforeEnter>
				<motion.div key={idx} initial='hidden' animate='visible' variants={list}>
					<CarouselCard idx={idx} />
				</motion.div>
			</AnimatePresence>
			<BsChevronRight className='react-icons' onClick={handleForward} />
		</Section>
	);
};

export default Carousel;
