import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Actions
// 1. ADD EXPENSE
const addExpense = (
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
const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
});

// 3. EDIT EXPENSE
const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});

// 4. SET TEXT FILTER
const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
});

// 5. SORT BY AMOUNT
const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT'
});

// 6. SORT BY DATE
const sortByDate = () => ({
	type: 'SORT_BY_DATE'
});

// 7. SET START DATE
const setStartDate = (startDate) => ({
	type: 'SET_START_DATE',
	startDate
});

// 8. SET END DATE
const setEndDate = (endDate) => ({
	type: 'SET_END_DATE',
	endDate
});

// 2 reducers. One for the expenses array and the other for the filters

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
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
		default:
			return state;
	}
};

const filtersReducerDefaultState = {
	text: '',
	sortBy: 'amount',
	startDate: undefined,
	endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch (action.type){
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text: action.text
			};
		case 'SORT_BY_DATE':
			return {
				...state,
				sortBy: 'date'
			};
		case 'SORT_BY_AMOUNT':
			return {
				...state,
				sortBy: 'amount'
			}
		case 'SET_START_DATE':
			return {
				...state,
				startDate: action.startDate
			}
		case 'SET_END_DATE':
			return {
				...state,
				endDate: action.endDate
			}
		default:
			return state;
	}
};

// FILTERING & SORTING

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses.filter((expense) => {
		const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
		const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());



		return startDateMatch && endDateMatch && textMatch;
	}).sort((a, b) => {
		if (sortBy === 'date'){
			return a.createdAt < b.createdAt ? 1 : -1;
		}

		if (sortBy === 'amount'){
			return a.amount < b.amount ? 1 : -1;
		}
	});
};




const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer
	})
);

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense( { id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('ffe'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));

const demoState = {
	expenses: [{
		id: 'sjshshsh',
		description: 'January rent',
		note: 'This was the final payment for that address',
		amount: 54500,
		createdAt: 0
	}],
	filters: {
		text: 'rent',
		sortBy: 'amount', // date or amount
		startDate: undefined,
		endDate: undefined
	}
};


// const user = {
// 	age: 27,
// 	name: 'Jen'
// }

// console.log({...user, location:'Phila'});