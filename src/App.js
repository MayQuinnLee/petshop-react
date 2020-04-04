import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import HomeBuilder from './containers/HomeBuilder/HomeBuilder';

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <HomeBuilder/>
                </Layout>
            </div>
        )
    }
}

export default App;