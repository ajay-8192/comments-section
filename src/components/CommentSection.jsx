import React, { useContext, useState } from 'react';
import ReplySection from './ReplySection';
import { CommentContext } from '../main';

const CommentSection = () => {
  const { commentsData, handleReplyToComment } = useContext(CommentContext);

  const [openInputBox, setOpenInput] = useState(false);

  const [newReply, setNewReply] = useState('');

  const handleOpenInputBox = () => {
    setOpenInput(!openInputBox);
  };

  const handleNewReply = (e) => {
    const { target: { value = '' } = {} } = e || {};
    setNewReply(value);
  };

  const getCommentSection = (comment) => {
    const handleReply = () => {
      handleReplyToComment(comment.id, newReply);
      setNewReply('');
      handleOpenInputBox();
    };
    return (
      <>
        <div>{comment.text}</div>
        <button onClick={handleOpenInputBox}>
          {openInputBox ? 'close' : 'reply'}
        </button>
        {openInputBox ? (
          <>
            <input type="text" value={newReply} onChange={handleNewReply} />
            <button onClick={handleReply}>Add</button>
          </>
        ) : null}
        {comment.replies.length
          ? comment.replies.map((replyId) => {
              return <ReplySection key={replyId} replyId={replyId} />;
            })
          : null}
      </>
    );
  };

  if (!commentsData.comments.length) return null;

  return (
    <>
      {commentsData.comments.map((comment) => {
        return (
          <React.Fragment key={comment.id}>
            {getCommentSection(comment)}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default CommentSection;
