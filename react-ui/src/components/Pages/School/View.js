import React from 'react';
import styled from '@emotion/styled';

import { Button } from '@material-ui/core';
import TableParent from '../../Parents/TableParent';
import theme from '../../../theme';

const View = ({
	filters,
	currentFilter,
	isTableAnimated,
	setIsTableAnimated,
	filteredTableData,
	handleClickFilterButton,
}) => (
	<Container>
		<GovHeadingsContainer>
			<MainHeading>
				Схема періодичності обов'язкових медичних профілактичних оглядів учнів загальноосвітніх
				навчальних закладів
			</MainHeading>
			<GovHeadings>
				<GovHeading>Наказ Міністерства охорони здоров'я України 16.08.2010 №682</GovHeading>
				<GovHeading>
					Зареєстровано в Міністерстві юстиції України 10 вересня 2010 р. за №794/18089
				</GovHeading>
			</GovHeadings>
		</GovHeadingsContainer>
		<FilterBlock>
			{filters.map((filter) => (
				<FilterButton
					variant={currentFilter.text === filter.text ? 'contained' : 'outlined'}
					color={'primary'}
					onClick={() => handleClickFilterButton(filter)}
					isActive={currentFilter.text === filter.text}
				>
					{filter.text}
				</FilterButton>
			))}
		</FilterBlock>
		<TableFade
			className={isTableAnimated ? 'active' : ''}
			isAnimated={isTableAnimated}
			onAnimationEnd={() => setIsTableAnimated(false)}
		>
			<TableParent tableData={filteredTableData}></TableParent>
		</TableFade>
	</Container>
);

const TableFade = styled.div`
	&.active {
		animation: ${theme.fadeAnimation} ${theme.fadeLong};
	}
`;
const Container = styled.div`
	display: flex;
	flex-direction: column;
`;
const GovHeadings = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	align-items: center;
`;
const GovHeading = styled.h3`
	font-size: 18px;
	font-style: italic;
	max-width: 370px;
	line-height: ${({ theme }) => theme.typography.line_height_default};
	&:last-of-type {
		text-align: right;
	}
`;
const GovHeadingsContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const MainHeading = styled.h2`
	font-size: 22px;
	margin: 0 auto;
	font-weight: 600;
	margin-bottom: 35px;
	text-align: center;
	max-width: 660px;
	line-height: ${({ theme }) => theme.typography.line_height_default};
`;
const FilterBlock = styled.div`
	display: flex;
	margin: 40px 0 20px;
`;
const FilterButton = styled(Button)`
  padding: 5px 15px !important;
  
  color: ${({ theme }) => theme.color.main} !important;
  border: 1px solid ${({ theme }) => theme.color.main_medium} !important;
  &:hover {
    border: 1px solid ${({ theme }) => theme.color.main} !important;
  }
  ${({ isActive }) =>
		isActive &&
		`
    border: 1px solid transparent ${theme.color.main} !important;
    background-color: ${theme.color.main} !important;
    color: #fff !important;
  `};
 
		/* border-radius: 15px;
	border: 1px solid ${({ theme }) => theme.color.main};
	transition: 0.2s;
	background: ${({ isActive, theme }) => (isActive ? theme.color.main : 'transparent')};
	display: flex;
	align-items: center;
	justify-content: center;
	outline: none;
	font-size: 16px;
	color: ${({ isActive }) => (isActive ? '#fff' : '#000')};
	cursor: pointer;
	height: 40px;
	&:hover {
		box-shadow: 0 0 4px ${({ theme }) => theme.color.main};
	} */
	&:not(:last-of-type) {
		margin-right: 15px;
	}
	&:last-of-type {
		margin-left: auto;
	}
`;

export default View;
