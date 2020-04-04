import React , {Component} from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
    render () {
        return(
            <Auxiliary>
                <div className={classes.Layout}> 
                    <Toolbar />
                    <p> Side Drawer </p>
                    <p> Main </p>
                    {this.props.children}
                </div>
            </Auxiliary>
        )
    }
}

export default Layout;
