import React from 'react';
import styled from '@emotion/styled';

import questions from '../../../data/kindergarten/questions';

const Kindergarten = () => (
	<Container>
		{questions.map(({ heading, items }) => (
			<Card key={heading}>
				<Heading>{heading}</Heading>
				<List>
					{items.map((text) => (
						<ListItem key={text}>{text}</ListItem>
					))}
				</List>
			</Card>
		))}
	</Container>
);

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
	grid-gap: 30px;
	width: 100%;
`;
const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	border-radius: 20px;
	border-top: 2px solid ${({ theme }) => theme.color.main};
	border-radius: 10px 10px 15px 15px;
	box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
`;
const Heading = styled.h3`
	font-size: 20px;
	color: ${({ theme }) => theme.color.main};
	margin-bottom: 25px;
	font-weight: 600;
	text-align: center;
	line-height: ${({ theme }) => theme.typography.line_height_small};
`;
const List = styled.ul`
	list-style: disc;
	padding-left: 18px;
`;
const ListItem = styled.li`
	color: ${({ theme }) => theme.color.text_main};
	font-size: 16px;
	line-height: ${({ theme }) => theme.typography.line_height_default};
	&:not(:last-of-type) {
		margin-bottom: ${({ theme }) => theme.typography.list_margin};
	}
`;

export default Kindergarten;
