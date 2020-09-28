import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { savePost } from '../features/posts/PostActions';

export const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      title,
      body,
      userId: 2,
    };
    dispatch(savePost(postData));
  };
  return (
    <div>
      <input placeholder='title' onChange={(e) => setTitle(e.target.value)} />
      <input placeholder='body' onChange={(e) => setBody(e.target.value)} />
      <button onClick={handleSubmit}>Create Post</button>
    </div>
  );
};
