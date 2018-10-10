import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

import generalStore from 'stores/generalStore';
import { fetchReqGen } from 'actions/generalActions';

import СompanionsList from 'components/СompanionsList';
import CompanionItem from 'components/CompanionItem';


class СompanionsListContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: true, 
        }
    }  

    stateUpdater = (data) => {
        this.setState({
            posts: data,
            loading: false,
        })
    }

    componentDidMount() {
        const url = 'posts';
        const event = 'getCompanions';
        fetchReqGen({url, event});
        generalStore.once(event, this.stateUpdater);     
    }

    render() {     
        const { posts, loading } = this.state; 
        const { location } = this.props;
        let companionsRend;

        if(posts.length && !loading)
        {
            companionsRend = posts.map((companion, idx) => {
                return (<CompanionItem key={idx} text={companion.name} id={companion.id} location={location.pathname} />)         
            });  
        }  

        return (  
            <СompanionsList companionsRend={companionsRend} /> 
        );
    }
}

export default withRouter(СompanionsListContainer);