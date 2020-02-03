import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import MyButton from '../util/myButton';

// Mui
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

// Redux
import { connect } from 'react-redux';
import { createItem, clearErrors } from '../redux/actions/dataActions';
import { CircularProgress } from '@material-ui/core';

const styles = theme => ({
    ...theme.root,
    addButton: {
        position: 'relative',
        top: '2%'
    },
    closeButton: {
        position: 'absolute',
        left: '91%',
        top: '6%'
    },
    submitButton: {
        position: 'relative',
        float: 'right',
        marginTop: 10
    },
    progressSpinner: {
        position: 'absolute'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
});

class NewItemForm extends Component {

    state = {
        title: '',
        errors: {},
        open: false,
    };

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.UI.errors) {
            this.setState({ errors: nextProps.UI.errors });

            if (!nextProps.UI.errors && !nextProps.UI.loading) {
                this.setState({
                    title: '',
                    errors: {},
                    open: false,
                });
            }
        }
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.props.clearErrors();
        this.setState({ open: false });
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: [event.target.value] });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let title = this.state.title;
        this.props.createItem({ title });
        this.handleClose();
    };

    render() {
        const {
            errors
        } = this.state;

        const {
            classes,
            UI: { loading }
        } = this.props;

        return (
            <Fragment>
                <MyButton
                    tip="add item"
                    onClick={this.handleOpen}
                    btnClassName={classes.addButton}>
                    <AddIcon />
                </MyButton>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    fullWidth
                    maxWidth="sm">

                    <MyButton
                        tip="close"
                        tipClassName={classes.closeButton}
                        onClick={this.handleClose}>
                        <CloseIcon />
                    </MyButton>

                    <DialogTitle>Add a new item</DialogTitle>

                    <DialogContent>
                        <form onSubmit={this.handleSubmit}>
                            <TextField
                                name='title'
                                type='text'
                                label='title'
                                error={errors.description ? true : false}
                                className={classes.textField}
                                onChange={this.handleChange}
                                fullWidth />

                            <Button
                                type='submit'
                                variant='contained'
                                color='primary'
                                className={classes.submitButton}
                                disabled={loading}>
                                submit
                                        {loading && (
                                    <CircularProgress size={30} className={classes.progressSpinner} />
                                )}
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>

            </Fragment>
        );
    }
}

NewItemForm.popTypes = {
    createItem: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    UI: PropTypes.object
};

const mapStateToProps = (state) => ({
    UI: state.UI
});
export default connect(mapStateToProps, { createItem, clearErrors })(withStyles(styles)(NewItemForm));