import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './component/Layout.jsx';
class Main extends React.Component {
    render() {
        return (
            <Layout>
                <div className="header">
                    <h1>Yet Another BoilerPlate</h1>
                </div>
            </Layout>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('app'));
