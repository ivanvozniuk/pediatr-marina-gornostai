import React from 'react';
import styled from '@emotion/styled';

const Dots = ({ length, activeSlide, onClick }) => (
	<Container>
		{new Array(length).fill(null).map((_, index) => (
			<Dot
				onClick={() => onClick(index)}
				key={`dot-${index}`}
				className={index === activeSlide && 'active'}
			/>
		))}
	</Container>
);
const Container = styled.div`
	display: flex;
	margin-top: 20px;
`;
const Dot = styled.div`
	width: 12px;
	height: 12px;
	background-color: rgba(0, 0, 0, 0.2);
	border-radius: 50%;
	cursor: pointer;
	transition: ${({ theme }) => theme.hoverTransition};
	&:hover {
		background-color: rgba(0, 0, 0, 0.35);
	}
	&:not(:last-of-type) {
		margin-right: 10px;
	}
	&.active {
		background-color: rgba(0, 0, 0, 0.5);
		opacity: 1;
	}
`;

export default Dots;
