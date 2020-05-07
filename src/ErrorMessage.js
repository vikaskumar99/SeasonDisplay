import React from 'react';
import './ErrorMessage.css';
const ErrorMessage = () =>
{
    return (

        <div className="ui icon message pan">
          <h1 className="message">Please click on the
          <i className="info circle icon big"></i> on the url bar and allow location access!!!</h1>
    
        </div>
    );
}

export default ErrorMessage;