import React from 'react'
//import '.LoginHeader.css';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class LoginHeader extends React.Component {
    render() {
        return (
            
            <div className="header">
                <Link className="link" to="/home">
                    <a href="/" className="header__Logo">LOGO</a>
                </Link>
          

            <Link className= "/" to="/LogIn">
                <button className="header__botton">Log In</button>
            </Link>
            </div>
          )
    }
}
//<img src="https://i.ibb.co/WzybLQK/del.png" alt="Facebook Logo" className="header__logo" />
//<a href="/" className="header__Logo">LOGO</a>
export default withStyles(styles)(LoginHeader);