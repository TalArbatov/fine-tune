import React, { useState } from "react";
import NewPost from "./NewPost/NewPost";
import * as ACTIONS from "../../actions/actionGenerators";
import { connect } from "react-redux";
import ViewPosts from "./ViewPosts/ViewPosts";

class Forum extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  state = {
    posts: []
  };
  createPost = post => {
    const newPost = {
      ...post,
      author: this.props.userReducer.username,
      dateCreated: Date.now(),
      comments: []
    };
    this.props.createPost(newPost);
  };
  render() {
    return (
      <div>
        <NewPost createPost={post => createPost(post)} />
        <ViewPosts posts={this.props.forumReducer.posts} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    forumReducer: state.forumReducer,
    userReducer: state.userReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(ACTIONS.createPost(post)),
    fetchPosts: () => dispatch(ACTIONS.fetchPosts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Forum);
