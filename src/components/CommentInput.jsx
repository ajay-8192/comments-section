import React, { useContext, useState } from 'react';
import { CommentContext } from '../main';

const CommentInput = () => {
  const { handleNewComment } = useContext(CommentContext);

  const [newComment, setNewComment] = useState('');

  const handleChange = (e) => {
    const { target: { value = '' } = {} } = e || {};
    setNewComment(value);
  };

  const handleSendComment = () => {
    handleNewComment(newComment);
    setNewComment('');
  };

  return (
    <>
      <input type="text" onChange={handleChange} value={newComment} />
      <button onClick={handleSendComment}>Add</button>
    </>
  );
};

export default CommentInput;
