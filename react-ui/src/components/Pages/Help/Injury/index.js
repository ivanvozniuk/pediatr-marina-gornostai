import React from 'react';

import TableParent from '../../../Parents/TableParent';
import injury from '../../../../data/help/injury';

const Injury = () => (
	<div class="flex flex-column align-items-center">
		<TableParent tableData={injury}></TableParent>
	</div>
);

export default Injury;
