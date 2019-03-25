import React from 'react';
import * as ACTIONS from '../../actions/actionGenerators';
import {connect} from 'react-redux'

const Logout = props => {
    return(
        <div>
            <p onClick={() => {props.logout()}}>Logout</p>
        </div>
    )
}
const mapStateToProps = state => {
    return {
      userReducer: state.userReducer
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      logout: () => dispatch(ACTIONS.logout())
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Logout);
  