import React from 'react';
import styled from '@emotion/styled';

import { useHistory } from 'react-router-dom';
import tabs from '../../../data/help/tabs';
import MaterialPaper from '@material-ui/core/Paper';
import MaterialTabs from '@material-ui/core/Tabs';
import MaterialTab from '@material-ui/core/Tab';

const TabsComponent = () => {
	const [value, setValue] = React.useState(0);
	const history = useHistory();

	const handleChange = (event, newValue) => {
		setValue(newValue);
		history.push(`/help/${tabs[newValue].link}`);
	};
	return (
		<Container>
			<Paper>
				<Tabs value={value} onChange={handleChange} centered>
					{tabs.map(({ name }) => (
						<Tab key={name} label={name} />
					))}
				</Tabs>
			</Paper>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 40px;
`;
const Paper = styled(MaterialPaper)`
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2) !important;
	border: 1px solid rgba(0, 0, 0, 0.15) !important;
	padding: 0 20px !important;
	border-radius: 10px !important;
`;
const Tabs = styled(MaterialTabs)`
	overflow: visible !important;
	.MuiTabs-indicator {
		background-color: ${({ theme }) => theme.color.main} !important;
		bottom: -1px !important;
	}
	.MuiTabs-scroller {
		overflow: visible !important;
	}
`;
const Tab = styled(MaterialTab)`
	font-family: 'SF Pro Display' !important;
	font-size: 16px !important;
	font-weight: 500 !important;
	color: #000 !important;
	opacity: 1 !important;
	text-transform: none !important;
	min-width: 170px !important;
	transition: ${({ theme }) => theme.hoverTransition} !important;
	&:hover {
		opacity: ${({ theme }) => theme.hoverOpacity} !important;
	}
	&.Mui-selected {
		color: ${({ theme }) => theme.color.main} !important;
		opacity: 1 !important;
	}
`;

export default TabsComponent;
