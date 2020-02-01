import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

// Mui
import Grid from '@material-ui/core/Grid';

// Redux
import { connect } from 'react-redux';
import { getItems } from '../redux/actions/dataActions';

const styles = {
    container: {
        width: '100%'
    }
};


class HomePage extends Component {
    componentDidMount() {
        this.props.getItems();
    }
    render() {

        const { items, loading } = this.props.data;

        let recentItemsMarkup = !loading && items !== null ?
            items.map((item) =>
                <Item key={item.title} item={item} />
            )
            : <p>Loading...</p>
        return (
            <div style={styles.container}>
                {recentItemsMarkup}
            </div>
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

export default connect(mapStateToProps, { getItems })(HomePage);