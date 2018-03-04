import * as firebase from 'firebase';

// Initialize Firebase
const config = {
	apiKey: "AIzaSyBPyVzQavgqUnB7eIKcxa05yITVcKFK5hM",
	authDomain: "expensify-97e42.firebaseapp.com",
	databaseURL: "https://expensify-97e42.firebaseio.com",
	projectId: "expensify-97e42",
	storageBucket: "expensify-97e42.appspot.com",
	messagingSenderId: "226335070022"
};

firebase.initializeApp(config);

const database = firebase.database();

// push generates the ID automatically

// database.ref('notes').push({
// 	title: 'To do',
// 	body: 'Go for a run'
// });

// database.ref('notes/-L6k-bP3I_h6hV1Q7TLq').update({
// 	body: 'Buy good'
// });

// Event subscriptions

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
	console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
	console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
	console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses').on('value', (snapshot) => {
// 	const expenses = [];

// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		});
// 	});

// 	console.log(expenses);
// });

// database.ref('expenses')
// 	.once('value')
// 	.then((snapshot) => {
// 		const expenses = [];

// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			});
// 		});

// 		console.log(expenses);
// 	});

// ADD EXPENSES in firebase

// database.ref('expenses').push({
// 	description: 'Rent',
// 	note: '',
// 	amount: 109500,
// 	createdAt: 38373636
// });

// database.ref('expenses').push({
// 	description: 'Phone bill',
// 	note: '',
// 	amount: 5900,
// 	createdAt: 9338376
// });

// database.ref('expenses').push({
// 	description: 'Food',
// 	note: '',
// 	amount: 1200,
// 	createdAt: 39383873
// });



// const firebaseNotes = {
// 	notes: {
// 		ajahaau: {
// 			title: 'First note',
// 			body: 'This is my note'
// 		},
// 		jss8shsh: {
// 			title: 'Second note',
// 			body: 'This is another note'
// 		}
// 	}
// };

// const notes = [{
// 	id: '12',
// 	title: 'First note',
// 	body: 'This is my note'
// }, {
// 	id: '44',
// 	title: 'Second note',
// 	body: 'This is another note'
// }];

// database.ref('notes').set(notes);












// database.ref().on('value', (snapshot) => {
// 	const val = snapshot.val();
// 	console.log(`${val.name} is a ${val.job} and lives in ${val.location.city}`);
// });


// GETTING DATA

// database.ref('location')
// 	.once('value')
// 	.then((snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	}).catch((e) => {
// 		console.log("Error fetching data ", e);
// 	});

// GETTING DATA WITH SUBSCRIPTIONS

// const onValueChange = database.ref().on('value', (snapshot) => {
// 	console.log(snapshot.val());
// }, (e) => {
// 	console.log("Error with data fetching", e);
// });

// setTimeout(() => {
// 	database.ref('age').set(28);
// }, 3500);

// // CANCELLING THE SUBSCRIPTION

// setTimeout(() => {
// 	database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
// 	database.ref('age').set(30);
// }, 10500);

// CHANGING DATA

//Remove data can be done either with
// = ref().remove
// = ref().set(null)

// database.ref('isSingle')
// 	.remove()
// 	.then(() => {
// 		console.log('it worked');
// 	}).catch((e) => {
// 		console.log('did not work');
// 	});

// note - update can also insert new values and
// also can remove data by setting to null

// database.ref().update({
// 	name: 'Mike',
// 	age: 29
// }).then(() => {
// 	console.log('it worked');
// }).catch((e) => {
// 	console.log('did not work');
// });

// // update without overwriting

// database.ref().update({
// 	job: 'Manager',
// 	'location/city': 'Boston'
// }).then(() => {
// 	console.log('ok');
// }).catch((e) => {
// 	console.log(e);
// });

// database.ref().set({
// 	name: 'Massi Terzi',
// 	age: 26,
// 	isSingle: false,
// 	location: {
// 		city: 'Philadelphia',
// 		country: 'United States'
// 	}
// }).then(() => {
// 	console.log('Data is saved');
// }).catch((e) => {
// 	console.log('This failed ', e);
// });

// database.ref().set('This is my data');

// database.ref('age').set(27);
// database.ref('location/city').set('Rome');

// database.ref('attributes').set({
// 	height: 456,
// 	weigth: 78
// }).then(() => {
// 	console.log('it worked')
// }).catch((e) => {
// 	console.log('did not worked ', e);
// });