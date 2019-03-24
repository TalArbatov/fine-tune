import React from 'react';
import * as ACTIONS from '../../actions/actionGenerators';
import {connect} from 'react-redux'
const Logout = props => {
    return(
        <div>
            <button onClick={() => {props.logout()}}>Logout</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {}
}
const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(ACTIONS.logout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Logout);
