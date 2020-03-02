import React from 'react';
import styled from '@emotion/styled';

import { Link as LinkElement } from '../../../elements';
import nav_links from '../../../data/header/nav_links';

const NavMenu = () => (
	<Nav>
		{nav_links.map(({ name, link, exact }) => (
			<Link href={link} key={name} exact={exact} size="medium">
				{name}
			</Link>
		))}
	</Nav>
);

const Nav = styled.nav`
	display: flex;
	padding: 0 20px;
	margin-right: -20px;
	background: #fff;
	z-index: 5;
`;
const Link = styled(LinkElement)`
	text-decoration: none;
	margin-right: 20px;
	&:last-of-type {
		margin-right: 0;
	}
	& span {
		transition: ${({ theme }) => theme.hoverTransition};
	}
	&:hover span {
		color: ${({ theme }) => theme.color.main};
		opacity: ${({ theme }) => theme.hoverOpacity};
	}
	&.active span {
		color: ${({ theme }) => theme.color.main};
		opacity: 1;
	}
`;

export default NavMenu;
