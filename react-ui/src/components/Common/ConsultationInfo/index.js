import React from 'react';
import styled from '@emotion/styled';

import { Link, List as ListElement, InnerList, Text } from '../../../elements';

import consultation_info from '../../../data/consultation';

const ConsultationInfo = ({ withTitle = true }) => (
	<Container>
		{withTitle && (
			<Title size="big" fontWeight="500">
				Отримати консультацію педіатра:
			</Title>
		)}
		<List>
			{consultation_info.map(({ text, list }) => (
				<li>
					<Text size="medium">{text}</Text>
					{list && (
						<InnerList>
							{list.map(({ text, link }) => (
								<li>
									{link ? (
										<Link href={link} isPrimary={true} native={true} size="medium">
											{text}
										</Link>
									) : (
										<Text size="medium">{text}</Text>
									)}
								</li>
							))}
						</InnerList>
					)}
				</li>
			))}
		</List>
	</Container>
);

const Title = styled(Text)`
	margin-bottom: 10px;
`;
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;
const List = styled(ListElement)`
	margin-left: 20px;
`;

export default ConsultationInfo;
