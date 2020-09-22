import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import postReducer from '../features/posts/postsStore/PostReducer';

export default configureStore({
  reducer: {
    post: postReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});
