import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getUser } from '../actions';

import RegistrationForm from 'components/RegistrationForm';

class RegistrationFormContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            user_name: '',
            isDisabled: 'disabled',  
            status: '',                     
        };   
    }

    clickLink() {
        const link = document.getElementById('reg-link');
        link.click();
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value, });
        (event.target.value) ? this.setState({ isDisabled: false, }) : this.setState({ isDisabled: 'disabled', });              
    }
    
    btnClick = (event) => {
        event.preventDefault();
        const { onGetUser } = this.props;            
        const { user_name } = this.state;
        this.setState({status: '...waiting for server response', });
        onGetUser(user_name)
        .then(() => !this.props.user.fetching && this.props.user.name ? 
            this.clickLink() 
            : 
            this.setState({status: '...something went wrong, open browser console'})
        );          
    }

    render() {  
        const { isDisabled, user_name, status, } = this.state;
       
        return (  
            <RegistrationForm 
                user_name={user_name}
                isDisabled={isDisabled}
                status={status}             
                onHandleChange={this.handleChange}         
                onClick={this.btnClick} 
            />       
        );
    }
};

function mapStateToProps(state) {
    return {
        user: state.user,
    }
};

function mapDispatchToProps(dispatch) {
    return {
        onGetUser: name => dispatch(getUser(name)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationFormContainer);