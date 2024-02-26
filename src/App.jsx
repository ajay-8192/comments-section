import { useState } from 'react';
import './App.css';
import CommentInput from './components/CommentInput';
import CommentSection from './components/CommentSection';
import { CommentContext } from './main';

function App() {
  const [commentsData, setCommentsData] = useState({
    comments: [],
    replies: [],
    users: [],
  });

  const handleNewComment = (text) => {
    const { replies, users, comments } = commentsData;
    const newComments = [...comments];
    const comLength = newComments.length;
    const payload = {
      id: comLength ? newComments[comLength - 1].id + 1 : 1,
      text,
      user_id: 3,
      replies: [],
    };
    newComments.push(payload);
    setCommentsData({
      comments: newComments,
      replies,
      users,
    });
  };

  const handleReplyToComment = (id, text) => {
    const { replies, users, comments } = commentsData;
    const newReplies = [...replies];
    const newLength = newReplies.length;
    const payload = {
      id: newLength ? newReplies[newLength - 1].id + 1 : 1,
      text,
      user_id: 10,
      replies: [],
    };
    comments.forEach((comment) => {
      if (comment.id === id) {
        comment.replies.push(payload.id);
      }
    });
    newReplies.push(payload);
    setCommentsData({
      comments,
      replies: newReplies,
      users,
    });
  };

  const handleReplyToReply = (id, text) => {
    const { replies, users, comments } = commentsData;
    const newReplies = [...replies];
    const payload = {
      id: newReplies[newReplies.length - 1].id + 1,
      text,
      user_id: 10,
      replies: [],
    };
    newReplies.forEach((reply) => {
      if (reply.id === id) {
        reply.replies.push(payload.id);
      }
    });
    newReplies.push(payload);
    setCommentsData({
      comments,
      replies: newReplies,
      users,
    });
  };

  return (
    <CommentContext.Provider
      value={{
        commentsData,
        handleReplyToComment,
        handleReplyToReply,
        handleNewComment,
      }}
    >
      <CommentInput />
      <CommentSection />
    </CommentContext.Provider>
  );
}

export default App;
