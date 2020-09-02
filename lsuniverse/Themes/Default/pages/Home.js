import React, {useContext} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const Home = props => {
    return (
        <div>
           <pre>
               {JSON.stringify(props, null, 2)}
           </pre>
        </div>
    );
}

const mapStateToProps = state => {
    console.log(state);
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Home);
