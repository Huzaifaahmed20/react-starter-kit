import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postReducer from '../features/posts/PostReducer';

export default configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer,
  },
});
