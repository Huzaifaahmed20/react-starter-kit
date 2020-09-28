import React from 'react';
import { ViewPosts, CreatePost } from '../../components';

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <CreatePost />
      <ViewPosts />
    </div>
  );
};
