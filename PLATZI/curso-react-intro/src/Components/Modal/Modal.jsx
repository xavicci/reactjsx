import React from 'react';
import ReactDOM  from 'react-dom';

function Modal ({children}){
    return ReactDOM.createPortal(
        <div className="modal-portal">
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export {Modal};