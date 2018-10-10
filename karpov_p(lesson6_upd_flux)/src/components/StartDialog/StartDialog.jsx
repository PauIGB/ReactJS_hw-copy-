import React, { PureComponent, Fragment } from 'react';

import CommentArea from 'containers/CommentAreaContainer';
import CommentForm from 'containers/CommentFormContainer';

export default class StartDialog extends PureComponent {  

    render() {    
        return ( 
            <Fragment>
                <CommentArea />
                <CommentForm />
            </Fragment>    
        );
    }
}

