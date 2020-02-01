import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { setItemInactive, setItemActive } from '../redux/actions/dataActions';
// import { setItemActive, setItemInactive } from '../redux/actions/dataActions'

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

const Item = ({ item }) => {

    const classes = useStyles();

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        console.log('handleChange');
        let checked = event.target.checked;
        console.log(`checked: ${checked}`);
        if (checked) {
            setItemInactive(item.itemId);
            // setItemInactive(item.itemId);
        } else {

            setItemInactive(item.itemId);
        }


        setChecked(checked);
    };

    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={checked} onChange={handleChange} value={item.title} />}
                        label={item.title}
                    />
                </FormGroup>
            </FormControl>
        </div>
    );
    // return (
    //     <Fragment >

    //         <tr>
    //             <td>
    //                 <Checkbox
    //                     disabled={!item.isActive}
    //                     checked={!item.isActive}
    //                     onChange={handleChange}
    //                     value="primary"
    //                     inputProps={{ 'aria-label': 'primary checkbox' }}
    //                 /></td>
    //             <td>
    //                 <Typeography className={item.isActive ? classes.active : classes.inactive} gutterBottom>

    //                     {item.title}

    //                 </Typeography>
    //             </td>
    //         </tr>

    //     </Fragment>
    // );

}

Item.propTypes = {
    setItemActive: PropTypes.func.isRequired,
    setItemInactive: PropTypes.func.isRequired,
}
export default Item;
