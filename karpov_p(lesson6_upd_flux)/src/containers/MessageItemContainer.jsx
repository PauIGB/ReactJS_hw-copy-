
import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import MessageItem from 'components/MessageItem';

import messageItemStore from 'stores/messageItemStore';
import { autoScroll } from '../actions/messageItemActions';

export default class MessageItemContainer extends PureComponent {
    static propTypes = {
        type: PropTypes.oneOf(['guest', 'me']),        
    }
    static defaultProps = {
        type: 'guest',
        text: [],
    };  

    componentDidMount() {
        autoScroll();      
    } 

    render() { 
        const { text, type } = this.props;          
        return (  
            <MessageItem text={text} type={type}/>       
        );
    }
}

