import React, { Component } from 'react';

import Chat from 'components/Chat';

import generalStore from 'stores/generalStore';
import { fetchReqGen } from 'actions/generalActions';

export default class ChatContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            res: [],
            loading: true, 
        };
      }

      stateUpdater = (data) => {
        this.setState({
            res: data,
            loading: false,
        })
    }

    //доп. запрос имени на серваке
    // getUserName() {
    //     const url = 'profile';
    //     const event = 'getUserName'
    //     fetchReqGen({url, event})
    //     generalStore.once(event, this.stateUpdater);
    // }
    
    componentDidMount() {    
        //обработка на клиенте - достаточно одной строки
        generalStore.once('setUserName', this.stateUpdater);
        // доп.запрос на сервер
        // this.getUserName();       
    } 

    //удаляем Listener
    componentWillUnmount() {
        generalStore.removeListener('setUserName', this.stateUpdater);
    }

    render() {  
        const { res, loading } = this.state;   
        return (  
            loading && !res.length ? 'loading ...' : <Chat res={res.name} />                   
        );
    }
}
