import { createReducer } from '@reduxjs/toolkit';
import { CREATE_POST } from './constants';

const postReducer = createReducer([], {
  [CREATE_POST]: (state, action) => {
    state.push(action.payload);
  },
});

export default postReducer;
