import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { getCompanions } from '../actions';

import Chat from 'components/Chat';


class ChatContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            res: [],
         };
      }

    componentDidMount() {
        const { onGetCompanions } = this.props;
        onGetCompanions();    
    } 

    render() {  
        const { userName, companions } = this.props;            
        return (  
            <Chat userName={userName} companions={companions} />                   
        );
    }
};

function mapStateToProps(state) {
    return {
        userName: state.user.name,
        companions: state.companions,
    }    
};

function mapDispatchToProps(dispatch) {
    return {
        onGetCompanions: () => dispatch(getCompanions()),
    }    
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatContainer)); // при использовании connect react-router перестает работать, нужно оборачивать в 
//with router