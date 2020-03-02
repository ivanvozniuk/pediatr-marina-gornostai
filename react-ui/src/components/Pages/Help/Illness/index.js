import React, { useState } from 'react';
import styled from '@emotion/styled';

import { Text } from '../../../../elements';
import illness from '../../../../data/help/illness';
import SliderParent from '../../../Parents/SliderParent';

const Ilness = () => {
	const [activeSlide, setActiveSlide] = useState(0);
	return (
		<SliderParent type={illness} activeSlide={activeSlide} setActiveSlide={setActiveSlide}>
			{illness.map(({ color, symptoms, actions, status, icon }, cardIndex) => (
				<Card color={color} key={color}>
					<Grid>
						<div className="flex flex-column align-items-start">
							<List>
								{cardIndex === 0 && (
									<ListItem color={color}>
										<Text>
											Якщо в дитини відсутня хоч одна з ознак
											<ColoredLink
												className="hoverable"
												color="yellow"
												onClick={() => setActiveSlide(1)}
											>
												жовтого
											</ColoredLink>
											та
											<ColoredLink
												className="hoverable"
												color="red"
												onClick={() => setActiveSlide(2)}
											>
												червоного
											</ColoredLink>
											червоного боксів, спостерігайте за дитиною вдома.
										</Text>
									</ListItem>
								)}
								{symptoms.map((symptom) => (
									<ListItem color={color} key={symptom}>
										<Text>{symptom}</Text>
									</ListItem>
								))}
							</List>
						</div>

						<Header>
							<IconWrapper iconColor={color} color={color}>
								<img src={icon.src} alt="Icon" width="70%" height="70%" />
							</IconWrapper>
							<Title color={color}>{status}</Title>
						</Header>
					</Grid>
					<RightRow>
						<Attention
							src={require('../../../../assets/icons/attention.svg')}
							alt="Attenttion"
							width="40"
							height="40"
						/>
						<List>
							{actions.map((action) => (
								<ListItem color={color} key={action}>
									<Text fontWeight="500">{action}</Text>
								</ListItem>
							))}
						</List>
					</RightRow>
				</Card>
			))}
		</SliderParent>
	);
};

const Card = styled.div`
	padding: 25px 25px 25px 40px;
	width: 100%;
	display: flex;
	flex-direction: column;
`;
const Grid = styled.div`
	display: grid;
	grid-template-columns: auto max-content;
	grid-gap: 0 80px;
`;
const Header = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-bottom: 20px;
`;
const Title = styled.h2`
	font-size: 26px;
	font-weight: 600;
	margin-top: 20px;
	color: ${({ theme, color }) => theme.color[color]};
`;
const List = styled.ul``;
const ListItem = styled.li`
	list-style-type: disc;
	&:not(last-of-type) {
		margin-bottom: 7px;
	}
`;
const RightRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin-top: 30px;
`;
const IconWrapper = styled.div`
	width: 100px;
	height: 100px;
	margin-left: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 5;
	border-radius: 50%;
	background-color: ${({ theme, iconColor }) => theme.color[iconColor]};
	box-shadow: 0 0 10px ${({ theme, iconColor }) => theme.color[iconColor]};
	border: 2px solid ${({ theme, color }) => theme.color[color]};
`;
const Attention = styled.img`
	margin-right: 30px;
	margin-top: 2px;
`;
const ColoredLink = styled.span`
	margin: 0 5px;
	color: ${({ color }) => (color === 'yellow' ? '#f7b731' : '#e74c3c')};
	font-weight: 500;
	text-decoration: underline;
`;

export default Ilness;
