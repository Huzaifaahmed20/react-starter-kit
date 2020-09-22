import api from '..';

const createPostApi = async (data) => {
  try {
    return await api.post('/posts', data);
  } catch (e) {
    return e;
  }
};

const fetchAllPostsApi = async () => {
  try {
    return await api.get('/posts');
  } catch (e) {
    return e;
  }
};

// export const UPDATE_POST = '/posts'; //put
// export const DELETE_POST = '/posts'; //delete

export { createPostApi, fetchAllPostsApi };
