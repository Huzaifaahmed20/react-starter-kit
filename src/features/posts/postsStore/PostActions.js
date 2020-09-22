import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createPostApi,
  fetchAllPostsApi,
} from '../../../app/data/remote/posts';
import { CREATE_POST, READ_POSTS } from './constants';

const makePost = createAction(CREATE_POST);
export const savePost = createAsyncThunk(
  'createPost',
  async (data, thunkAPI) => {
    try {
      thunkAPI.dispatch(makePost(data));
      const response = await createPostApi(data);
      return response;
    } catch (e) {
      console.log(`ERROR ${e}`);
      return e;
    }
  }
);

const readPosts = createAction(READ_POSTS);
export const fetchAllPosts = createAsyncThunk(
  'readPosts',
  async (data, thunkAPI) => {
    try {
      const response = await fetchAllPostsApi();
      thunkAPI.dispatch(readPosts({ posts: response.data }));
      return response;
    } catch (e) {
      console.log(`ERROR ${e}`);
      return e;
    }
  }
);
