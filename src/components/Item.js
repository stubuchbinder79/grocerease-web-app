import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { setItemInactive, setItemActive } from '../redux/actions/dataActions';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
    active: {
        color: '#000'
    },
    inactive: {
        color: '#999'
    }
}));

const Item = (props) => {

    
    const {
        item
    } = this.props;
    
    const classes = useStyles();
   
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        let checked = event.target.checked;
        if (checked) {
            console.log('calling set Item inactive:');
            setItemInactive();
        } else {
            this.props.setItemActive(item.itemId);
        }

        setChecked(checked);
    };

    return (    
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox disabled={checked} checked={checked} onChange={handleChange} value={item.title} />}
                        label={item.title}
                    />
                </FormGroup>
            </FormControl>
        </div>
    );
}

const mapStateToProps = (state) => ({
    // item: state.item
});

const mapActionsToProps = {
    setItemInactive,
    setItemActive
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    setItemActive: PropTypes.func.isRequired,
    setItemInactive: PropTypes.func.isRequired,
}
export default connect(mapStateToProps, mapActionsToProps)(Item);
