import React from 'react';
import styled from '@emotion/styled';

import { Fade, BaseLayout } from '../layout';

const Page = ({ children, fluid }) => (
	<BaseLayout fluid={fluid}>
		<Fade>
			<Padding fluid={fluid}>{children}</Padding>
		</Fade>
	</BaseLayout>
);

const Padding = styled.div`
	padding: ${({ fluid }) => (fluid ? 0 : '20px 0 40px')};
	height: 100%;
`;

export default Page;
