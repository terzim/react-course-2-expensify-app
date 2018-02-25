import moment from 'moment';

export default [{
	id: 1,
	description: 'Gum',
	note: '',
	amount: 195,
	createdAt: 0
}, {
	id: 2,
	description: 'Rent',
	note: '',
	amount: 3000,
	createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
	id: 3,
	description: 'Credit Card',
	note: 'The credit card payment',
	amount: 4000,
	createdAt: moment(0).add(4, 'days').valueOf()
}, {
	id: 4,
	description: 'Gym',
	note: '',
	amount: 10,
	createdAt: moment(0).subtract(8, 'days').valueOf()
}, {
	id: 5,
	description: 'School',
	note: '',
	amount: 12,
	createdAt: moment(0).add(8, 'days').valueOf()
}];