// 2 reducers. One for the expenses array and the other for the filters

// Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
	switch (action.type){
		case 'ADD_EXPENSE':
			return [...state, action.expense];
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => {
				return id !== action.id;
			});
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if (expense.id == action.id){
					return {
						...expense,
						...action.updates
					};
				} else {
					return expense;
				}
			});
		case 'SET_EXPENSES':
			return action.expenses;
		default:
			return state;
	}
};