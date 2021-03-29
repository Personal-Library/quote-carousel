import React, { useState } from 'react';
import styled from 'styled-components';
import CarouselCard from './CarouselCard';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';
import { reviewData } from './assets/reviewData';

const Section = styled.section`
	width: 100%;
	height: 400px;
	background-color: #eeeeee;
	display: flex;
	justify-content: center;
	align-items: center;

	.react-icons {
		cursor: pointer;
		font-size: 1.5rem;
	}
`;

const Carousel = () => {
	const [idx, setIdx] = useState(0);
	const [debounced, setDebounced] = useState(true);
	const endOfData = reviewData.length - 1;

	const handleDebounce = () => {
		if (!debounced) return;
		// Once clicked, set false and disable clicks
		setDebounced(false);
		// After timeout, set true
		setTimeout(() => {
			setDebounced(true);
		}, 100);
	};

	const handleBackward = () => {
		if (debounced) {
			const next = idx - 1;
			if (next < 0) setIdx(endOfData);
			else setIdx(next);
			handleDebounce();
		}
	};

	const handleForward = () => {
		if (debounced) {
			const next = idx + 1;
			if (next > endOfData) setIdx(0);
			else setIdx(next);
			handleDebounce();
		}
	};

	return (
		<Section>
			<BsChevronLeft className='react-icons' onClick={handleBackward} />
			<AnimatePresence>
				<motion.div
					key={idx}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ display: 'none' }}
					transition={{ duration: 0.1 }}
				>
					<CarouselCard idx={idx} />
				</motion.div>
			</AnimatePresence>
			<BsChevronRight className='react-icons' onClick={handleForward} />
		</Section>
	);
};

export default Carousel;
