import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ItemList from './ItemList';

// Redux
import { connect } from 'react-redux';
import { getItems } from '../redux/actions/dataActions';

class HomePage extends Component {
    componentDidMount() {
        this.props.getItems();
    }
    render() {

        const {
            data: { items },
            UI: { loading }
        } = this.props;

        let itemsMarkup = !loading ?
            <ItemList items={items} key="itemList" />
            : <p>Loading...</p>
        return (
            <Fragment>
                {itemsMarkup}
            </Fragment>
        )
    }
}

HomePage.propTypes = {
    getItems: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    UI: PropTypes.object
};

const mapStateToProps = state => ({
    data: state.data,
    UI: state.UI
});

export default connect(mapStateToProps, { getItems })(HomePage);