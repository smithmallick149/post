const INITIAL_STATE = {
	allPosts: [],
	postId: {},
	comments: [],
};

//types
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const SAVE_ALL_POSTS = 'SAVE_ALL_POSTS';
export const GET_ALL_POSTS_ID = 'GET_ALL_POSTS_ID';
export const SAVE_ALL_POSTS_ID = 'SAVE_ALL_POSTS_ID';
export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS';
export const SAVE_ALL_COMMENTS = 'SAVE_ALL_COMMENTS';
export const DELETE_POST = 'DELETE_POST';
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';

//Actions
export const addAllPosts = (payload) => ({
	type: SAVE_ALL_POSTS,
	payload: payload,
});
export const getPostsId = (payload) => ({
	type: SAVE_ALL_POSTS_ID,
	payload: payload,
});
export const comments = (payload) => ({
	type: SAVE_ALL_COMMENTS,
	payload: payload,
});
export const addPost = (payload) => ({ type: ADD_POST, payload: payload });
export const deletPosts = (payload) => ({
	type: DELETE_POST,
	payload: payload,
});
export const updatePost = (payload) => ({
	type: UPDATE_POST,
	payload: payload,
});

//reducer
export const myReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SAVE_ALL_POSTS: {
			console.log(action);
			return { ...state, allPosts: [...state.allPosts, ...action.payload] };
		}
		case SAVE_ALL_POSTS_ID: {
			console.log(action);
			return { ...state, postId: { ...state.postId, ...action.payload } };
		}
		case SAVE_ALL_COMMENTS: {
			console.log(action);
			return { ...state, comments: [...state.comments, ...action.payload] };
		}
		case UPDATE_POST: {
			const index = state.allPosts.findIndex(
				(x) => x.id === action.payload.userId
			);
			if (index > -1) {
				let allPosts = state.allPosts;
				allPosts[index] = action.payload;
				return {
					...state,
					allPosts,
				};
			} else {
				return state;
			}
		}
		case DELETE_POST: {
			const index = state.allPosts.findIndex((x) => x.id === action.payload);

			if (index > -1) {
				return {
					...state,
					allPosts: [
						...state.allPosts.slice(0, index),
						...state.allPosts.slice(index + 1),
					],
				};
			} else {
				return state;
			}
		}
		case ADD_POST: {
			return {
				...state,
				allPosts: [...state.allPosts, action.payload],
			};
		}
		default:
			return state;
	}
};
