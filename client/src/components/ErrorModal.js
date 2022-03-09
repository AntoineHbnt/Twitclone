import React from 'react';

const ErrorModal = ({text}) => {
    return (
        <div className='error-modal-container'>
            <div className="error-modal-text">
                <span>{text}</span>
            </div>
        </div>
    );
};

export default ErrorModal;