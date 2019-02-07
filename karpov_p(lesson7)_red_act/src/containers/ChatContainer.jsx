import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import { fetchCompanions } from '../actions';

import Chat from 'components/Chat';

class ChatContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            res: [],
        };
    };

    componentDidMount() {
        const { onGetCompanions } = this.props;
        onGetCompanions();    
    }; 

    render() {  
        const { userName, companions } = this.props;  
       
        return (  
            <Chat 
                userName={userName} 
                companions={companions} 
            />                   
        );
    };
};

function mapStateToProps(state) {
    return {
        userName: state.user.name,
        companions: state.companions,
    };    
};

function mapDispatchToProps(dispatch) {
    return {
        onGetCompanions: () => dispatch(fetchCompanions()),
    };    
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer); 

// ChatContainer.propTypes = {
//     userName: PropTypes.string.isRequired,
//     companions: PropTypes.object.isRequired,
//     onGetCompanions: PropTypes.func.isRequired,
// };