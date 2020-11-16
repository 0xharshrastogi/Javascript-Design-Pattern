class User {
	constructor(name, id) {
		this.name = name;
		this.id = id;
		this.hasAccess = true;
	}
	
	hasAccess() {
		return this.user === "Bob";
	}
}

const users = [new User("Bob", 1), new User("John", 2)];

function getUser(id) {
	return users.find((user) => user.id === id);
}

function printUser(id) {
	const user = getUser(id);

	let name = "Guest";

	if (user != null && user.name != null) name = user.name;

	console.log("Hello " + name);

	if (user != null && user.hasAccess != null && user.hasAccess === true) {
		console.log("You Have A Access");
	} else {
		console.log("You Are Not Allowed Here ");
	}
}
