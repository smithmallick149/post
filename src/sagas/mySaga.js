import { put, call } from 'redux-saga/effects';

import {
	getAllposts,
	getPostId,
	comment,
	deletePost,
	createPost,
	updatePostApi,
} from '../services/api';
import {
	addAllPosts,
	getPostsId,
	comments,
	deletPosts,
	updatePost,
} from '../stores/myReducer';

// all posts
export function* getAllPostsSaga(action) {
	const results = yield call(getAllposts, action.payload);
	if (results) {
		yield put(addAllPosts(results));
	}
}

//creat post
export function* createPostSaga(action) {
	const post = yield call(createPost, action.payload);
	console.log(action.payload, 'action.payload', post);
	if (post) {
		yield put(addAllPosts([post]));
		// alert('added successfully')
	}
}
// export function* createPostSaga(action) {
//   try {
//     yield call(createPost, action.id)
//   } catch (error) {
//     console.log(error)
//   }
// }

//post by id
export function* getAllPostsIdSaga(action) {
	const results = yield call(getPostId, action.payload);
	console.log('action.payload', action.payload);
	if (results) {
		yield put(getPostsId(results));
	}
}

// comments
export function* getCommentSaga(action) {
	const commentResults = yield call(comment, action.payload);
	if (commentResults) {
		yield put(comments(commentResults));
	}
}

//delete ppost
export function* deletePostSaga(action) {
	try {
		yield call(deletePost, action.payload.id, 'ac');
		yield put(deletPosts, action.payload.id);
	} catch (error) {
		console.log(error);
	}
}

//update post
export function* updatePostSaga(action) {
	const up = yield call(updatePostApi, action.payload);
	console.log(action.payload, 'acction', up);
	yield put(updatePost, action.payload);
}
