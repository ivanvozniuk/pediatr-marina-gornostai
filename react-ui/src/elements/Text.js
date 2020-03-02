import React from 'react';
import styled from '@emotion/styled';

const Text = ({ size, isPrimary, children, fontWeight, textAlign, isWhite, ...props }) => (
	<Typography
		size={size}
		isPrimary={isPrimary}
		fontWeight={fontWeight}
		textAlign={textAlign}
		isWhite={isWhite}
		{...props}
	>
		{children}
	</Typography>
);

const Typography = styled.span`
	color: ${({ theme, isPrimary, isWhite }) =>
		isPrimary ? theme.color.main : isWhite ? '#fff' : theme.color.text_main};
	font-size: ${({ size }) => {
		switch (size) {
			case 'small':
				return '14px';
			case 'default':
				return '16px';
			case 'medium':
				return '18px';
			case 'big':
				return '20px';
			case 'bigger':
				return '22px';
			case 'biggest':
				return '26px';
			case 'large':
				return '34px';
			case 'largest':
				return '42px';
			default:
				return '16px';
		}
	}};
	line-height: ${({ theme }) => theme.typography.line_height_default};
	font-weight: ${({ fontWeight }) => fontWeight || 400};
	text-align: ${({ textAlign }) => textAlign || 'left'};
`;

export default Text;
