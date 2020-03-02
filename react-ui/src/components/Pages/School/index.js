import React, { useState, useEffect } from 'react';

import school from '../../../data/school/table';
import filters from '../../../data/school/filters';
import View from './View';

const School = () => {
	const [currentFilter, setCurrentFilter] = useState(filters[filters.length - 1]);
	const [filteredTableData, setFilteredTableData] = useState(school);
	const [isTableAnimated, setIsTableAnimated] = useState(false);
	const handleClickFilterButton = (filter) => {
		setCurrentFilter(filter);
		setIsTableAnimated(true);
	};
	useEffect(() => {
		const currentFilterIndex = filters.indexOf(currentFilter);
		const isCurrentFilterIndexLast = currentFilterIndex === filters.length - 1;
		if (isCurrentFilterIndexLast) {
			setFilteredTableData(school);
		} else {
			setFilteredTableData({ ...school, main_info: [school.main_info[currentFilterIndex]] });
		}
	}, [currentFilter]);

	return (
		<View
			filters={filters}
			currentFilter={currentFilter}
			filteredTableData={filteredTableData}
			isTableAnimated={isTableAnimated}
			setIsTableAnimated={setIsTableAnimated}
			handleClickFilterButton={handleClickFilterButton}
		/>
	);
};

export default School;
