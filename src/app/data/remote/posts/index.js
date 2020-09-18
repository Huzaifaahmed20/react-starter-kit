import api from '..';

const createPost = async (data) => {
  try {
    return await api.post('/posts', data);
  } catch (e) {
    return e;
  }
};

const fetchAllPosts = async () => {
  try {
    return await api.get('/posts');
  } catch (e) {
    return e;
  }
};

const fetchSinglePost = async (id) => {
  try {
    return await api.get(`/posts/${id}`);
  } catch (e) {
    return e;
  }
};
// export const UPDATE_POST = '/posts'; //put
// export const DELETE_POST = '/posts'; //delete

export { createPost, fetchAllPosts, fetchSinglePost };
