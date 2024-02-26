import React, { useContext } from 'react';
import ReplySection from './ReplySection';
import { CommentContext } from '../main';

const CommentSection = () => {
  const { commentsData, handleReplyToComment } = useContext(CommentContext);

  // console.log('COMMENT', comment);

  console.log('=======>', commentsData);

  const getCommentSection = (comment) => {
    const handleReply = () => {
      console.log('==========> ADD REPLY TO COMMENT');
      handleReplyToComment(comment.id, 'HELLOOOOOOOO!');
    };
    return (
      <>
        <div>{comment.text}</div>
        <button onClick={handleReply}>reply</button>
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
