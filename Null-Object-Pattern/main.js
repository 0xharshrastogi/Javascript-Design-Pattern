class User {
	constructor(name, id) {
		this.name = name;
		this.id = id;
	}

	hasAccess() {
		return this.name === "Bob";
	}
}

class NullUser {
	constructor() {
		this.name = "Guest";
		this.id = -1;
	}

	hasAccess() {
		return false;
	}
}

const users = [new User("Bob", 1), new User("John", 2)];

function getUser(id) {
	const user = users.find((user) => user.id === id);

	if (user == null) {
		return new NullUser();
	} else {
		return user;
	}
}

function printUser(id) {
	const user = getUser(id);

	console.log("Hello " + user.name);

	if (user.hasAccess()) {
		console.log("You Have A Access");
	} else {
		console.log("You Are Not Allowed Here ");
	}
}
