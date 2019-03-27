import React from "react";
import PostItem from "./PostItem";

export default props => {
  console.log(props);
  return (
    <div>
      {props.posts.map((post, index) => {
        return <PostItem key={index} post={post} />;
      })}
    </div>
  );
};
