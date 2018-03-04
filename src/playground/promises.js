// Example promise

// Promise are a way to sync-up an asynchronous operation
// to catch a long-running task

// can only resolve or rejec
// can only pass a single item (but it csan also be a complex object
// to resolve or reject)

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({
			name: 'Andrew',
			age: 26
		});
		// reject('all wrong from playground promises');
	}, 5000);
});

console.log('before');

// callback
promise.then((data) => {
	console.log('1', data);
	return 'some data';
}).then((str) => {
	console.log('Does this run?', str);
}).catch((error) => {
	console.log(error);
});

// second argument to then is equivalent to catch. 
// but we like more the explicit catch method

console.log('after');