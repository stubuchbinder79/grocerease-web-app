import React, { Fragment } from 'react';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Typeography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
    },
    active: {
        color: '#000'
    },
    inactive: {
        color: '#999'
    }
});

const Item = ({ item }) => {

    const classes = useStyles();

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <Fragment >

            <tr>
                <td>
                    <Checkbox
                        disabled={!item.isActive}
                        checked={!item.isActive}
                        onChange={handleChange}
                        value="primary"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    /></td>
                <td>
                    <Typeography className={item.isActive ? classes.active : classes.inactive} gutterBottom>

                        {item.title}

                    </Typeography>
                </td>
            </tr>

        </Fragment>
    );

}
export default Item;
