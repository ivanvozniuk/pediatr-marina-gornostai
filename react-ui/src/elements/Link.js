import React from 'react';
import styled from '@emotion/styled';

import { NavLink as NativeNavLink } from 'react-router-dom';
import { Text } from './index';

const Link = ({
	href,
	children,
	native = false,
	exact,
	isPrimary,
	className,
	decoration = 'underline',
	...props
}) => (
	<>
		{native ? (
			<NativeLink
				className={`${className} hoverable`}
				target="blank"
				href={href}
				isPrimary={isPrimary}
				decoration={decoration}
			>
				<Text fontWeight={500} isPrimary={true} {...props}>
					{children}
				</Text>
			</NativeLink>
		) : (
			<NavLink
				to={href}
				className={`${className} hoverable`}
				activeClassName="active"
				exact={exact}
				decoration={decoration}
			>
				<Text isPrimary={isPrimary} {...props}>
					{children}
				</Text>
			</NavLink>
		)}
	</>
);

const NativeLink = styled.a`
	text-decoration: none;
	color: ${({ theme, isPrimary }) => (isPrimary ? theme.color.main : theme.color.text_main)};
`;
const NavLink = styled(NativeNavLink)`
	text-decoration: none;
`;
export default Link;
