import React from 'react';

const Popup = ({ children }) => {
    return ReactDOM.createPortal(
        children,
        document.getElementById('modal-root')
    );
};

export default Popup;
