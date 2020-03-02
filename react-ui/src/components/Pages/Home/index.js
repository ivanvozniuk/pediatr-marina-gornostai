import React from 'react';
import styled from '@emotion/styled';

import ParticlesElement from 'react-particles-js';
import particles_options from '../../../data/particles';
import { Text } from '../../../elements';
import { Wrapper as WrapperLayout } from '../../../layout';

const Home = () => {
	return (
		<Container>
			<Particles params={particles_options} />
			<Wrapper>
				<Info>
					<Title isWhite fontWeight={600} size="largest">
						Марина Горностай
					</Title>
					<Subtitle isWhite fontWeight={600} size="large">
						Лікар-педіатр з 15-річним досвідом роботи
					</Subtitle>
				</Info>
				<Image />
			</Wrapper>
		</Container>
	);
};
const Particles = styled(ParticlesElement)`
	position: absolute;
	width: 100%;
	height: 100%;
`;
const Container = styled.div`
	position: relative;
	min-height: max(calc(100vh - 70px), 400px);
	display: flex;
	margin-bottom: -40px;
	background-image: linear-gradient(
		to bottom,
		#fff,
		${({ theme }) => theme.color.main_light},
		#a2d2ed
	);
`;
const Wrapper = styled(WrapperLayout)`
	display: flex;
	justify-content: space-around;
	align-items: center;
	min-height: 100%;
`;
const Info = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;
const Title = styled(Text)`
	z-index: 10;
	text-shadow: 3px 3px rgba(0, 0, 0, 0.4);
`;
const Subtitle = styled(Text)`
	margin: 15px 0 0;
	z-index: 10;
	text-shadow: 2px 2px rgba(0, 0, 0, 0.4);
`;
const Image = styled.div`
	border-radius: 50%;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
	background-image: url('https://helsi.me/media/cbc9f9d0-5579-40a3-9898-a54a3d27aa2e');
	background-position: 47% 95%;
	background-repeat: no-repeat;
	height: 250px;
	width: 250px;
	z-index: 10;
`;

export default Home;
