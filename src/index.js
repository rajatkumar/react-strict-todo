import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './component/Layout.jsx';
class Main extends React.Component {
    render() {
        return <Layout title="Welcome" />;
    }
}

ReactDOM.render(<Main />, document.getElementById('app'));
