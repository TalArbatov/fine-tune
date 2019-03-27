import React from "react";
import { connect } from "react-redux";
import * as ACTIONS from "../../../actions/actionGenerators";
import {withRouter} from 'react-router-dom'
const ViewPost = props => {
  const {title, _id, content, author, dateCreated, comments} = props.forumReducer.selectedPost;

  const deletePost = () => {
    props.deletePost(_id).then(res => {
      if(res.success) {
        props.history.push('/forum')
      }
      else alert('error deleting post')
    })
  }
  return (
    <div>
      <h4>Post Details:</h4>
      <p>id: {_id}</p>
      <p>title: {title}</p>
      <p>content: {content}</p>
      <p>author: {author}</p>
      <p>dateCreated: {dateCreated}</p>

      <button onClick={() => deletePost()}>delete</button>
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
    deletePost : (_id) => dispatch(ACTIONS.deletePost(_id))
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ViewPost)); 

