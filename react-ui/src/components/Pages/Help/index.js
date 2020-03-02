import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import Tabs from './Tabs';
import Illness from './Illness';
import Injury from './Injury';
import ConsultationInfo from '../../Common/ConsultationInfo';
import { Text } from '../../../elements';
import { Fade } from '../../../layout';
import { useLocation, useHistory } from 'react-router-dom';

const Help = () => {
	const location = useLocation();
	const history = useHistory();
	const getCurrentTab = () => {
		return location.pathname.slice(6);
	};

	useEffect(() => {
		if (location.pathname === '/help') {
			history.push('help/illness');
		}
	}, [history, location]);
	return (
		<Container>
			<Tabs />
			{getCurrentTab() === 'illness' && (
				<Fade>
					<Illness />
				</Fade>
			)}
			{getCurrentTab() === 'injury' && (
				<Fade>
					<Injury />
				</Fade>
			)}
			<Info>
				<ConsultationInfoWrapper>
					<ConsultationInfo />
				</ConsultationInfoWrapper>
				<Reminder size="big" fontWeight="600">
					Якщо ви сумніваєтесь, де отримати допомогу, зателефонуйте <span>103</span>
				</Reminder>
			</Info>
		</Container>
	);
};
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Info = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	max-width: 800px;
	/* box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
	padding: 25px;
	border-radius: 15px; */
	margin-top: 40px;
`;
const ConsultationInfoWrapper = styled.div`
	display: flex;
	justify-content: center;
`;
const Reminder = styled(Text)`
	margin-top: 25px;
	display: block;
	text-align: left;
	color: ${({ theme }) => theme.color.text_main};
	span {
		color: ${({ theme }) => theme.color.red};
	}
`;

export default Help;
