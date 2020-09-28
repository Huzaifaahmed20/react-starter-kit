import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPosts } from '../features/posts/PostActions';

export const ViewPosts = () => {
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);
  return (
    <ul>
      {posts.map((item, index) => {
        return <li key={index}>{item.title}</li>;
      })}
    </ul>
  );
};
