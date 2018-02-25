// 4. SET TEXT FILTER
export const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
});

// 5. SORT BY AMOUNT
export const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT'
});

// 6. SORT BY DATE
export const sortByDate = () => ({
	type: 'SORT_BY_DATE'
});

// 7. SET START DATE
export const setStartDate = (startDate) => ({
	type: 'SET_START_DATE',
	startDate
});

// 8. SET END DATE
export const setEndDate = (endDate) => ({
	type: 'SET_END_DATE',
	endDate
});