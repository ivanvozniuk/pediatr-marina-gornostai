import React from 'react';
import styled from '@emotion/styled';

import { Wrapper } from '../../../layout';
import Logo from '../../Common/Logo';
import NavMenu from './NavMenu';

const Header = () => {
	return (
		<Container>
			<Wrapper className="d-flex align-items-center justify-content-between full-height">
				<LogoWrapper>
					<Logo width="60" height="60" />
				</LogoWrapper>
				<NavMenu />
			</Wrapper>
		</Container>
	);
};

const Container = styled.header`
	height: 70px;
	position: relative;
	&:before {
		content: ' ';
		height: 1px;
		background-color: rgba(0, 0, 0, 0.2);
		position: absolute;
		top: 50%;
		left: 0%;
		width: 100%;
		transform: translateY(-50%);
		z-index: 5;
	}
	& div {
		height: 100%;
	}
`;
const LogoWrapper = styled.div`
	background: #fff;
	display: flex;
	padding: 0 15px;
	z-index: 5;
	margin-left: -15px;
`;

export default Header;
