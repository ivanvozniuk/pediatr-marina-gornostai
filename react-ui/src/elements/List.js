import React from 'react';
import styled from '@emotion/styled';

const List = ({ children, marker, ...props }) => (
	<ListElem marker={marker} {...props}>
		{children}
	</ListElem>
);

const ListElem = styled.ul`
	padding-left: 19px;
	list-style: ${({ marker }) => marker || 'disc'};
`;

export default List;
