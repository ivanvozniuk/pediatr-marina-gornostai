import React from 'react';
import styled from '@emotion/styled';

import Dots from './Dots';

const SliderParent = ({ children, activeSlide, setActiveSlide }) => {
	const handleClickNextSlide = () => {
		if (activeSlide !== children.length - 1) {
			setActiveSlide(activeSlide + 1);
		}
	};
	const handleClickPrevSlide = () => {
		if (activeSlide !== 0) {
			setActiveSlide(activeSlide - 1);
		}
	};
	const handleClickDot = (slide) => {
		setActiveSlide(slide);
	};
	return (
		<Container>
			<Wrapper className="d-flex align-items-center">
				<LeftArrow
					onClick={handleClickPrevSlide}
					disabled={activeSlide === 0}
					className={activeSlide === 0 && 'disabled'}
				>
					<img
						src={require('../../../assets/icons/slider-arrow.svg')}
						width="90%"
						alt="Slider left arrow"
					/>
				</LeftArrow>
				<VisibleSlot>
					<SlotsContainer activeSlide={activeSlide} length={children.length}>
						{children.map((item, index) => (
							<Slot key={`slot-${index}`}>{item}</Slot>
						))}
					</SlotsContainer>
				</VisibleSlot>
				<RightArrow
					onClick={handleClickNextSlide}
					disabled={activeSlide === children.length - 1}
					className={activeSlide === children.length - 1 && 'disabled'}
				>
					<img
						src={require('../../../assets/icons/slider-arrow.svg')}
						width="90%"
						alt="Slider right arrow"
					/>
				</RightArrow>
			</Wrapper>
			<Dots
				activeSlide={activeSlide}
				length={children.length}
				onClick={(slide) => handleClickDot(slide)}
			/>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	max-width: 100%;
`;
const VisibleSlot = styled.div`
	max-width: 100%;
	overflow: hidden;
	border-radius: 25px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
	margin: 0 30px;
`;
const Slot = styled.div`
	width: 100%;
`;
const SlotsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(${({ length }) => length}, 100%);
	transition: ${({ theme }) => theme.fadeMedium};
	transform: translateX(-${({ activeSlide }) => activeSlide * 100}%);
	flex-grow: 1;
`;
const Arrow = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 45px;
	max-width: 45px;
	height: 45px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	background-color: ${({ theme }) => theme.color.main};
	background: transparent;
	border: 0;
	border-radius: 50%;
	cursor: pointer;
	transition: ${({ theme }) => theme.hoverTransition};
	background: rgba(0, 0, 0, 0.08);
	&:hover {
		${({ disabled }) =>
			!disabled &&
			`
      background: rgba(0, 0, 0, 0.13);
    `}
	}
	&:active {
		${({ disabled }) =>
			!disabled &&
			`
      background: rgba(0, 0, 0, 0.25);
    `}
	}
	&:focus {
		outline: 0;
	}
	&.disabled {
		opacity: 0.5;
	}
`;
const LeftArrow = styled(Arrow)``;
const RightArrow = styled(Arrow)`
	transform: rotate(180deg);
`;
export default SliderParent;
