import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/actions/userActions';
import NewItemForm from './NewItemForm';

// Mui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

class NavBar extends Component {
    render() {
        const { authenticated } = this.props;

        const logout = () => {
            this.props.logoutUser()
            window.location = "/login"
        }
        return (
            <>
                <AppBar>
                    <Toolbar className="nav-container">
                        {
                            authenticated ? (
                                <NewItemForm />
                            ) : (
                                    < Button color="inherit" component={Link} to="/login">Login</Button>
                                )
                        }
                        GrocerEase
                    {authenticated ? (
                            <Button color="inherit" onClick={logout}>Logout</Button>
                        ) : <></>}
                    </Toolbar>
                </AppBar >
            </>
        )
    }
}

NavBar.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    logoutUser: PropTypes.func
};

const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
});

export default connect(mapStateToProps, { logoutUser })(NavBar);