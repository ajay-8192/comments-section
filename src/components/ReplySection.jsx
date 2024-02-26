import React, { useContext, useState } from 'react';
import { CommentContext } from '../main';

const ReplySection = ({ replyId }) => {
  const { commentsData, handleReplyToReply } = useContext(CommentContext);

  const [openInputBox, setOpenInput] = useState(false);

  const [newReply, setNewReply] = useState('');

  const handleOpenInputBox = () => {
    setOpenInput(!openInputBox);
  };

  const handleNewReply = (e) => {
    const { target: { value = '' } = {} } = e || {};
    setNewReply(value);
  };

  const { replies = [] } = commentsData || {};

  const handleNewReplyButton = () => {
    handleReplyToReply(replyId, newReply);
    setNewReply('');
    handleOpenInputBox();
  };

  const reply = replies.find((rep) => rep.id === replyId);

  return (
    <>
      <div>{reply.text}</div>
      <button onClick={handleOpenInputBox}>
        {openInputBox ? 'close' : 'reply'}
      </button>
      {openInputBox ? (
        <>
          <input type="text" value={newReply} onChange={handleNewReply} />
          <button onClick={handleNewReplyButton}>Add</button>
        </>
      ) : null}
      {reply.replies.length
        ? reply.replies.map((repId) => {
            return <ReplySection key={repId} replyId={repId} />;
          })
        : null}
    </>
  );
};

export default ReplySection;
