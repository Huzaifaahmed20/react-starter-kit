import React from 'react';
import { CreatePost } from './CreatePost';
import ViewPosts from './ViewPosts';

export default function Posts() {
  return (
    <div>
      <CreatePost />
      <ViewPosts />
    </div>
  );
}
