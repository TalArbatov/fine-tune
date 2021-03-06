import React from 'react';
import PostsList from './PostsList'
const ViewPosts = props => {
  return(
    <div>
      <h4>View Posts: </h4>
      <PostsList getPost={props.getPost} posts={props.posts}/>
    </div>
  )
}

export default ViewPosts;