function getFetch(url, params = {}) {
	const queryString = Object.entries(params)
		.map((param) => {
			return `${param[0]}=${param[1]}`;
		})
		.join("&");

	return fetch(`${url}?${queryString}`, {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});
}

async function getUsers() {
	const res = await getFetch("https://jsonplaceholder.typicode.com/users");

	return await res.json();
}

async function getUserPost(userId) {
	const res = await getFetch("https://jsonplaceholder.typicode.com/posts", {
		userId: userId,
	});

	return await res.json();
}

getUsers().then((users) => {
	users.forEach((user) => {
		getUserPost(user.id).then((posts) => {
			console.log(user.name);
			console.log(posts.length);
		});
	});
});
