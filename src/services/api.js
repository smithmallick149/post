import axios from 'axios';

// get all posts
export function getAllposts(number) {
	return axios
		.get(`https://jsonplaceholder.typicode.com/posts`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return error;
		});
}

export async function createPost(data) {
	let res = await axios.post(
		'https://jsonplaceholder.typicode.com/posts',
		data
	);
	return res.data;
}

//get post by id
export function getPostId(id) {
	return axios
		.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return error;
		});
}

//comments
export function comment(id) {
	return axios
		.get(` https://jsonplaceholder.typicode.com/posts/1/comments`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return error;
		});
}

// //delete post
export async function deletePost(id) {
	let res = await axios.delete(
		`https://jsonplaceholder.typicode.com/posts/${id}`
	);
	return res.data;
}

//update post
export async function updatePostApi(id) {
	let res = await axios.put(
		` https://jsonplaceholder.typicode.com/posts/${id}`
	);
	return res.data;
}
