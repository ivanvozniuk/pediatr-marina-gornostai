import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import {
	Table,
	TableBody,
	TableCell as TableCellComponent,
	TableContainer as TableContainerComponent,
	TableHead,
	TableRow,
} from '@material-ui/core';

const TableParent = ({ tableData }) => {
	const { top_headings, left_headings, main_info } = tableData;
	const [rows, setRows] = useState([]);
	useEffect(() => {
		if (left_headings) {
			const rows = left_headings.map((left_heading, index) => [left_heading, ...main_info[index]]);
			setRows(rows);
		} else {
			const rows = main_info;
			setRows(rows);
		}
	}, [main_info, left_headings]);

	return (
		<TableContainer>
			<Table>
				<TableHead>
					<TableRow>
						{top_headings.map(({ text, icon, minWidth, width }, index) => (
							<HeadingTableCell
								fontSize="20px"
								align="center"
								key={text + index}
								minWidth={minWidth}
								width={width}
							>
								<div className="flex">
									{icon && <HeadingIcon src={icon} />}
									{text}
								</div>
							</HeadingTableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, index) => (
						<TableRow key={'row' + index}>
							{row.map(({ text, children, empty, colspan, textAlign, height }, index) => (
								<BodyTableCell
									isEmpty={empty}
									isChildren={children}
									colSpan={colspan || '1'}
									textAlign={textAlign}
									key={text + index}
									height={height}
								>
									{typeof text === 'string' ? (
										text
									) : (
										<List>
											{text.map((item, index) => (
												<li key={text + index}>{item}</li>
											))}
										</List>
									)}
								</BodyTableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
const TableContainer = styled(TableContainerComponent)`
	border-top: 2px solid #2a97d6;
	border-left: 1px solid rgba(224, 224, 224, 1);
	border-radius: 7px 7px 0 0;
	box-shadow: 0 7px 25px rgba(0, 0, 0, 0.2);
`;
const TableCell = styled(TableCellComponent)`
	color: ${({ theme }) => theme.color.text_main} !important;
	border-right: 1px solid rgba(224, 224, 224, 1);
`;
const HeadingTableCell = styled(TableCell)`
	font-size: 18px !important;
	text-align: left !important;
	line-height: ${({ theme }) => theme.typography.line_height_default} !important;
	min-width: ${({ minWidth }) => minWidth || '0'};
	width: ${({ width }) => width || 'auto'};
`;
const BodyTableCell = styled(TableCell)`
	font-size: 16px !important;
	line-height: ${({ theme }) => theme.typography.line_height_default} !important;
	text-align: ${({ textAlign }) => textAlign || 'left'} !important;
	height: ${({ height }) => height || 'auto'};
	&:first-of-type {
		font-weight: 500 !important;
		background: ${({ theme }) => theme.color.main_lightest};
	}
	${({ isChildren }) =>
		isChildren &&
		`
    font-size: 14px !important;
    padding-left: 40px !important;
  `}
`;
const HeadingIcon = styled.img`
	width: 22px;
	height: 22px;
	margin-right: 10px;
`;
const List = styled.ul`
	list-style: disc;
	padding-left: 15px;
`;

export default TableParent;
