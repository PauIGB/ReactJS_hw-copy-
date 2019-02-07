import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions';

import RegistrationForm from 'components/RegistrationForm';

class RegistrationFormContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            user_name: '',
            isDisabled: 'disabled', 
            status: '',                    
        };   
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value, });
        (event.target.value) ? this.setState({ isDisabled: false, }) : this.setState({ isDisabled: 'disabled', });              
    };
    
    btnClick = event => {
        event.preventDefault();
        const { onGetUser, history } = this.props;            
        const { user_name } = this.state;
        this.setState({status: '...waiting for server response', });
        onGetUser(user_name)
        .then(() => !this.props.error && history.push('/chat'));          
    };

    render() {  
        const { isDisabled, user_name, status } = this.state;
        const { error, errorMessage } = this.props;
        const info = error ? errorMessage : status;
       
        return (  
            <RegistrationForm 
                user_name={user_name}
                isDisabled={isDisabled}
                info={info}  
                error={error}           
                onHandleChange={this.handleChange}
                onClick={this.btnClick} 
            />       
        );
    };
};

function mapStateToProps(state) {
    return {
        user: state.user,
        loading: state.user.loading,
        error: state.user.error,
        errorMessage: state.user.errorMessage,       
    };
};

function mapDispatchToProps(dispatch) {
    return {
        onGetUser: name => dispatch(fetchUser(name)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationFormContainer);