import "../styles/card.css";
import Profile from "./Profile";
import Comment from "./Comment";
import CardMenu from "./CardMenu";
import React, { useState } from "react";

function Card(props) {
  const { storyBorder, image, likedByText, likedByNumber, hours, comments } =
    props;
  const [postContent, setPostContent] = useState("");
  return (
    <div className="card">
      <header>
        <Profile iconSize="medium" storyBorder={storyBorder} />
      </header>
      <img className="cardImage" src={image} alt="card content" />
      <CardMenu />
      <div className="likedBy">
        <Profile iconSize="small" hideAccountName={true} />
        <span>
          Liked by <strong>{likedByText}</strong> and{" "}
          <strong>{likedByNumber} others</strong>
        </span>
      </div>
      <div className="comments">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              accountName={comment.user}
              comment={comment.text}
            />
          );
        })}
      </div>
      <div className="timePosted">{hours} HOURS AGO</div>
      <div className="addComment">
        <textarea
          style={{ marginRight: 0 }}
          Value={postContent}
          onchange={(e) => setPostContent(e.target.value)}
          className="input-box"
          placeholder="add a comment..."
        ></textarea>
        <button>Post</button>
      </div>
    </div>
  );
}

export default Card;
