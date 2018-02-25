import uuid from 'uuid';

// Actions
// 1. ADD EXPENSE
export const addExpense = (
		{ 
			description = '', 
			note = '', 
			amount = 0, 
			createdAt = 0 
		} = {}
	) => ({
		type: 'ADD_EXPENSE',
		expense: {
			id: uuid(),
			description,
			note,
			amount,
			createdAt
	}
});

// 2. REMOVE EXPENSE
export const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
});

// 3. EDIT EXPENSE
export const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});