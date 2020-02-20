import React from 'react';
import Header from './Header.jsx';
import '../style/main.less';
const Layout = ({ title, children }) => {
    return (
        <div className="container">
            <Header title={title || 'DUMMY'} />
            {children}
        </div>
    );
};

export default Layout;
