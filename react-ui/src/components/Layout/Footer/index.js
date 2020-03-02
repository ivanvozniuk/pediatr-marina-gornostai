import React from 'react';
import styled from '@emotion/styled';

import { Wrapper } from '../../../layout';
import { Text, Link } from '../../../elements';
import social from '../../../data/social';

const Footer = () => (
	<Container>
		<Wrapper>
			<Inner>
				<SocialContainer>
					<SocialRow>
						<SocialIcons>
							{social.messangers.map(({ icon }, index) => (
								<Icon key={index} isCircle src={icon} />
							))}
						</SocialIcons>
						<Link native={true} isPrimary href={`tel:${social.phone.default}`}>
							{social.phone.formatted}
						</Link>
					</SocialRow>
					<SocialRow>
						<SocialIcons>
							<Icon src={require('../../../assets/icons/gmail.svg')} />
						</SocialIcons>
						<Link native={true} isPrimary href={`mailto:${social.mail}`}>
							{social.mail}
						</Link>
					</SocialRow>
				</SocialContainer>
				<SocialContainer rightAlign>
					<SocialRow>
						<Link href={social.helsi.link} isPrimary={true} native={true}>
							Helsi.me
						</Link>
					</SocialRow>
					<SocialRow>
						<Text>{social.location.text}</Text>
						<Link href={social.location.map_link} isPrimary={true} native={true}>
							&nbsp;(Показати на карті)
						</Link>
					</SocialRow>
					<SocialRow>
						<Text>Понеділок - П'ятниця, 8:00 - 19:30</Text>
					</SocialRow>
				</SocialContainer>
			</Inner>
		</Wrapper>
	</Container>
);

const Container = styled.footer`
	padding: 20px 0;
	background: #e5e5e5;
	display: flex;
	align-items: center;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.07);
`;
const Inner = styled.div`
	display: flex;
	justify-content: space-between;
	height: 100%;
`;
const SocialContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: ${({ rightAlign }) => (rightAlign ? 'center' : 'flex-start')};
`;
const SocialRow = styled.div`
	display: flex;

	&:not(:last-of-type) {
		margin-bottom: 5px;
	}
`;
const SocialIcons = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-right: 15px;
	width: 86px;
`;
const Icon = styled.img`
	width: 24px;
	height: 24px;
	&:not(:last-of-type) {
		margin-right: 7px;
	}
	box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
	border-radius: ${({ isCircle }) => (isCircle ? '50%' : 0)};
`;

export default Footer;
