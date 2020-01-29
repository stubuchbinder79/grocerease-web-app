import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ItemList from './ItemList';

// Mui
import Grid from '@material-ui/core/Grid';

// Redux
import { connect } from 'react-redux';
import { getItems } from '../redux/actions/dataActions';

const styles = {
    container: {
        width: '100%'
    },
    grid: {
        flexGrow: 1,
        margin: 'auto 20px auto 20px'
    }
};

class HomePage extends Component {
    componentDidMount() {
        this.props.getItems();
    }
    render () {

        const {
            items,
            loading
        } = this.props.data;

        let itemsMarkup = !loading ?
        <ItemList items={items} />
             : <p>Loading...</p>
        return (
           <Fragment>
               <h2>My Items</h2>
               <button 
                    style={{ marginBottom: 20 }}
                    className="btn btn-primary add-item"
                    >
                        Add Item
                    </button>
                    {/* <ItemList items={this.props.items} /> */}
           </Fragment>
        )
    }
}

HomePage.propTypes = {
    getItems: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    data: state.data
});

export default connect(mapStateToProps, {getItems})(HomePage);