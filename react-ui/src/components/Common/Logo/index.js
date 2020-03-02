import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Logo = ({ width, height }) => (
	<RouterLink to="/">
		<img
			src="https://zexler.ru/sites/default/files/content/product/topicons/prodvizhenie-medicinskih-saytov.png"
			alt="Logotype"
			width={width}
			height={height}
		/>
	</RouterLink>
);

const RouterLink = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
	transition: ${({ theme }) => theme.hoverTransition};
	&:hover {
		opacity: ${({ theme }) => theme.hoverOpacity};
	}
`;

export default Logo;
