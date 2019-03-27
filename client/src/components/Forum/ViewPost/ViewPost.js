import React from "react";
import { connect } from "react-redux";
import * as ACTIONS from "../../../actions/actionGenerators";

const ViewPost = props => {
  const {title, _id, content, author, dateCreated, comments} = props.forumReducer.selectedPost;
  return (
    <div>
      <h4>Post Details:</h4>
      <p>title: {title}</p>
      <p>content: {content}</p>
      <p>author: {author}</p>
      <p>dateCreated: {dateCreated}</p>

      <button>delete</button>
      <button>edit</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    forumReducer: state.forumReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewPost);
