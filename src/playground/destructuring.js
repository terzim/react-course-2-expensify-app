console.log('Destructuring');

// Object destructuring

// 1st example
const person = {
	name: 'Andrew',
	age: 26,
	location: {
		city: 'Philadelphia',
		temp: 92
	}
};

// destructuring, fallback and default value
const {name: firstName = 'Anonymous', age} = person;

console.log(`${ firstName } is ${ age }`);

const { city, temp: temperature } = person.location;

if ( city && temperature) {
	console.log(`It is ${temperature} in ${city}`);	
}

// 2nd example
const book = {
	title: 'Ego is the enemy',
	author: 'Ryan Holliday',
	publisher: {
		name: 'Penguin'
	}
};

const { name: publisherName = 'self-published' } = book.publisher;

console.log(publisherName);

//
// Array destructuring
//

const address = ['1299 5 Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [ , ciudad, yourState = 'New York' ] = address;

console.log(`You are in ${ciudad}, ${yourState}`);

const item = ['coffee (hot)', '02.00', '02.50', '02.75'];

const [coffeeHot, , cost, ] = item;

console.log(`A medium ${coffeeHot} costs ${cost}`);