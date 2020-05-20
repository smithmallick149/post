import { all, call, fork, takeLatest, takeEvery } from 'redux-saga/effects';
import {
	getAllPostsSaga,
	getAllPostsIdSaga,
	getCommentSaga,
	deletePostSaga,
	createPostSaga,
} from './mySaga';

import {
	GET_ALL_POSTS_ID,
	ADD_POST,
	DELETE_POST,
	SAVE_ALL_COMMENTS,
} from '../stores/myReducer';

function* startup() {
	// Get All posts
	yield call(getAllPostsSaga, {});
	// yield call(getAllPostsIdSaga, {})
	yield call(getCommentSaga, {});
	// yield call(deletePostSaga, {})
}

export default function* rootSaga() {
	yield all([
		fork(startup),
		takeLatest(GET_ALL_POSTS_ID, getAllPostsIdSaga),
		takeLatest(ADD_POST, createPostSaga),
		takeLatest(DELETE_POST, deletePostSaga),
		// takeLatest(SAVE_ALL_COMMENTS, getCommentSaga),
	]);
}
