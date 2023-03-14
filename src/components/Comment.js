import "../styles/comment.css";
import getComments from "../utils/getComments";

function Comment(props) {
  const { accountName, comment } = props;

  return (
    <div className="commentContainer">
      <div className="accountName">{accountName}</div>
      <div className="comment">
        {(comment) => getComments[Math.floor(Math.random() * getComments)]}
      </div>
    </div>
  );
}

export default Comment;
