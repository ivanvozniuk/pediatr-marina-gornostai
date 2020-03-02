import React from 'react';
import styled from '@emotion/styled';

import { List } from './index';

const InnerListComponent = ({ children }) => <InnerList marker="circle">{children}</InnerList>;

export default InnerListComponent;

const InnerList = styled(List)`
	margin-top: 3px;
	margin-bottom: 10px;
`;
