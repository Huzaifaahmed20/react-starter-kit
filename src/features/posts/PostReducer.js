import { createReducer } from '@reduxjs/toolkit';
import { CREATE_POST, READ_POSTS } from './constants';

const initialState = {
  posts: [],
};
const postReducer = createReducer(initialState, {
  [CREATE_POST]: (state, action) => {
    state.posts.push(action.payload);
  },
  [READ_POSTS]: (state, action) => {
    return { posts: [...state.posts, ...action.payload.posts] };
  },
});

export default postReducer;
