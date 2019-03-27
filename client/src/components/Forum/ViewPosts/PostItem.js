import React from "react";
import { Link } from "react-router-dom";

const PostItem = (props) => {
  return (
    <div>
      <p>{props.post._id}. {props.post.title}</p>
      <Link to={`/post/${props.post._id}`}>
        <button onClick={() => props.getPost(props.post._id)}>Enter Post</button>
      </Link>
    </div>
  );
};

export default PostItem;
