import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './component/Layout.jsx';
class Main extends React.Component {
    render() {
        return (
            <Layout title="Welcome">
                <h2>Hello Sugandha!!?</h2>
            </Layout>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('app'));
