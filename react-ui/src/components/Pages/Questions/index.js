import React from 'react';
import styled from '@emotion/styled';

import { Text } from '../../../elements';
import questionsList from '../../../data/questions/list';
import DefaultAnswer from './DefaultAnswer';

const Questions = () => {
	return (
		<List>
			{questionsList.map((item) => {
				const { question, answer, type } = item;
				return (
					<ListItem key={question.text}>
						<Question fontWeight={600} size="large" isPrimary={true}>
							{question.text}
						</Question>
						{type === 'pediatrition-consultation' ? 1 : <DefaultAnswer answer={answer} />}
					</ListItem>
				);
			})}
		</List>
	);
};

const List = styled.ul`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 100px 8%;
`;
const ListItem = styled.li`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	&:nth-of-type(2n) {
		transform: translateY(calc(50% + 50px));
		align-items: flex-end;
		& span {
			width: 100%;
			text-align: right;
		}
	}
`;
const Question = styled(Text)`
	margin-bottom: 25px;
	width: 100%;
`;

export default Questions;
