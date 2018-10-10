import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

import dispatcher from '../dispatcher';
import generalStore from 'stores/generalStore';
import { fetchReqGen } from 'actions/generalActions';


import CommentArea from 'components/CommentArea';
import MessageItem from 'containers/MessageItemContainer';

class CommentAreaContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        };
        this.event = 'getComments';
    } 
    
    stateUpdater = (data) => {
        this.setState({
            comments: data,
        })
    }

    addComment = (data) => {        
        //добавление новых комментов на клиенте
        // let { comments } = this.state;
        // comments = comments.concat([data]);
        // this.stateUpdater(comments);
        //добавление через сервак
        this.getComments();
    }
  

    getComments() {
        const {
            match: {
              params: { id }
            }
        } = this.props;
        // const url = `posts/${id}/comments?_sort=id&_order=DESC&_limit=7`; 
        const url = `posts/${id}/comments`;
        const event = this.event;
        fetchReqGen({url, event});
        generalStore.on(event, this.stateUpdater);
    }

    componentDidMount() {
        this.getComments();
        //получение новых комментов
        generalStore.on('addComment', this.addComment);


    }

   //Получение комментов при смене собеседника
    componentDidUpdate(prevProps) {
        generalStore.removeListener(this.event, this.stateUpdater);        
        const { location } = this.props;
        const prevLocation = prevProps.location.pathname;
        if (prevLocation !== location.pathname) { 
            this.getComments(); 
        }        
    }

    componentWillUnmount() {
        generalStore.removeListener(this.event, this.stateUpdater);
    }   

    render() { 
        const { comments } = this.state;
        const messageRend = comments.map((comment, idx) => {
            return (<MessageItem key={idx} text={comment.body} type={comment.type} />)         
        });      
        return (  
            <CommentArea messageRend={messageRend} />       
        );
    }
}

export default withRouter(CommentAreaContainer);