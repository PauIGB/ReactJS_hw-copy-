import './CommentForm.css';

import React, {Component} from 'react';

import classNames from 'classnames';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            type: 'me',
        };   
        this.isDisabled = "disabled";

    }
  
    addComment = (event) => {
        let promise = new Promise((resolve) => {
            event.preventDefault();        
            this.props.updateData(this.state);     
            document.querySelector('textarea').value = "";         
            this.setState({
                text: '',
            }); 
            this.isDisabled = "disabled"; 
            resolve()
        })      
       
        promise.then( () => {
            const commArea = document.querySelector('.comment-area');
            commArea.scrollTo({
                top: commArea.scrollHeight,
                behavior: 'smooth'
            })
        }
        )
        // function func() {
        //     const commArea = document.querySelector('.comment-area');
        //     commArea.scrollTo({
        //         top: commArea.scrollHeight,
        //         behavior: 'smooth'
        //     })
        //     // someElement.scrollTop = someElement.scrollHeight;
        // }          
        // setTimeout(func, 100);
          
   
    }     

    handleChange = (event) => {
        this.setState({            
            text: event.target.value,
        });
        if (event.target.value !== "" ) {
            this.isDisabled = false;     
   
        } else {           
            this.isDisabled = "disabled";
        }     
    }
    
            // someElement.scrollTo({
        //         top: someElement.scrollHeight,
        //         behavior: 'smooth'
        //     })


    render() {
        const formStyles = classNames('form');
        const textareaStyles = classNames('form__text-area');
        const formbtnStyles = classNames('form__sub-btn', {
            'form__sub-btn--disabled': this.isDisabled === "disabled",
            'form__sub-btn--active': this.isDisabled === false,
        });

        return(
            <form action="#" className={formStyles}>
                <textarea name="textarea" onChange={this.handleChange} className={textareaStyles} placeholder="..." autoFocus></textarea>
                <input onClick={this.addComment} className={formbtnStyles} type="submit" disabled={this.isDisabled} /> 
                          
            </form>
        )
    }
}

export default CommentForm;