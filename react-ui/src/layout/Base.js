import React from 'react';
import styled from '@emotion/styled';

import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { Wrapper } from './index';

const BaseLayout = ({ fluid, children }) => (
	<Container>
		<Header />
		<Main>
			<Wrapper fluid={fluid}>{children}</Wrapper>
		</Main>
		<Footer />
	</Container>
);

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;
`;
const Main = styled.main`
	flex-grow: 1;
	padding-bottom: 40px;
	height: 100%;
`;

export default BaseLayout;
