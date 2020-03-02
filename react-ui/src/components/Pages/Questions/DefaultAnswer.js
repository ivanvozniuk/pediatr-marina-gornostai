import React, { Fragment } from 'react';
import styled from '@emotion/styled';

import { Link, List, InnerList, Text } from '../../../elements';

const DefaultAnswer = ({ answer }) => (
	<>
		{answer.length === 1 ? (
			<Text size="medium">{answer[0].text}</Text>
		) : (
			<List>
				{answer.map(({ text, link, list }) =>
					list ? (
						<Fragment key={text}>
							<li>
								<AnswersListItem size="medium">{text}</AnswersListItem>
							</li>

							<InnerList marker={'circle'}>
								{list.map(({ text, link }) => (
									<li key={text}>
										{link ? (
											<Link href={link} isPrimary={true} native={true} size="medium">
												{text}
											</Link>
										) : (
											<AnswersListItem size="medium">{text}</AnswersListItem>
										)}
									</li>
								))}
							</InnerList>
						</Fragment>
					) : (
						<li>
							<AnswersListItem size="medium">{text}</AnswersListItem>
						</li>
					),
				)}
			</List>
		)}
	</>
);
const AnswersListItem = styled(Text)``;

export default DefaultAnswer;
