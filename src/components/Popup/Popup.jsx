import React from 'react';
import ReactDOM from 'react-dom';

const Popup = ({ isOpen, isLeaving, children }) => {
    if (!isOpen) return null;
    return ReactDOM.createPortal(
        <div
            style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'grid',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
            }}
            onClick={() => isLeaving()}
        >
            {children}
        </div>,
        document.getElementById('modal-root')
    );
};

export default Popup;
