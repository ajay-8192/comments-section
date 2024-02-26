import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CommentInput from './components/CommentInput';
import ReplySection from './components/ReplySection';
import CommentSection from './components/CommentSection';
import { CommentContext } from './main';

function App() {
  const [commentsData, setCommentsData] = useState({
    comments: [
      {
        id: 2,
        text: 'Hi, I am Comment',
        user_id: 5,
        replies: [1],
      },
    ],
    replies: [
      {
        id: 1,
        text: 'Hi, I am REPLY',
        user_id: 5,
        replies: [2],
      },
      {
        id: 2,
        text: 'Hi, I am REPLY @@@',
        user_id: 5,
        replies: [],
      },
    ],
    users: [],
  });

  const handleNewComment = (text) => {
    console.log('NEW COMMENT', text);
    const payload = {
      id: 5,
      text,
      user_id: 3,
      replies: [],
    };
    const { replies, users, comments } = commentsData;
    const newComments = [...comments];
    newComments.push(payload);
    setCommentsData({
      comments: newComments,
      replies,
      users,
    });
  };

  const handleReplyToComment = (id, text) => {
    console.log(id, text);
  };

  const handleReplyToReply = (id, text) => {
    console.log(id, text);
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
