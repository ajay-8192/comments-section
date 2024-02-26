import React, { useContext } from 'react';
import { CommentContext } from '../main';

const ReplySection = ({ replyId }) => {
  const { commentsData, handleReplyToReply } = useContext(CommentContext);

  const { replies = [] } = commentsData || {};

  const handleNewReplyButton = () => {
    console.log('==========> REPLY BUTTON CLICKED');
    handleReplyToReply();
  };

  const reply = replies.find((rep) => rep.id === replyId);

  return (
    <>
      <div>{reply.text}</div>
      <button onClick={handleNewReplyButton}>reply</button>
      {reply.replies.length
        ? reply.replies.map((repId) => {
            return <ReplySection key={repId} replyId={repId} />;
          })
        : null}
    </>
  );
};

export default ReplySection;
