import { createStore } from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy
})

const resetCount = () => ({
	type: 'RESET'
});

const setCount = ( {count} ) => ({
	type: 'SET',
	count
});


// Reducer function - they specify how the application
// state changes in response to actions
// 
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
	
	switch (action.type) {
	    case 'INCREMENT':
	    	// const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
	        return {
	            count: state.count + action.incrementBy
	        };

	    case 'DECREMENT':
	        return {
	            count: state.count - action.decrementBy
	        };

	    case 'SET':
	    	return {
	    		count: action.count
	    	}

	    case 'RESET':
	        return {
	            count: 0
	        };

	    default:
	        return state;
	}

};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});



// How to increase or reset the state count?
 
// So we need to know how to amend the data in the redux store

// Use Actions: an object that gets sent to the store

// Increment
// store.dispatch({
// 	type: 'INCREMENT',
// 	incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

// store.dispatch({
// 	type: 'INCREMENT'
// });

store.dispatch(incrementCount());

// Reset
store.dispatch(resetCount());

// Decrement

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 20 }));

store.dispatch(setCount({ count: 101 }));