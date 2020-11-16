class Address {
	constructor(zip, street) {
		this.zip = zip;
		this.street = street;
	}
}

class User {
	constructor(name, { age = -1, phone = "xxxx", address = "NuLL" } = {}) {
		this.name = name;
		this.age = age;
		this.phone = phone;
		this.address = address;
	}
}

const user = new User("Bob", { address: new Address("110110", "GB Road") });

console.log(user);
