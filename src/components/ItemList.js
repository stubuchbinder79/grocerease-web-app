import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const ItemList = ({ items }) => (
    <table className="table">
        <tbody>
            {items.map((item) => {
                return (
                    <Item item={item} key={item.title} />
                );
            })}
        </tbody>
    </table>
);

ItemList.propTypes = {
    items: PropTypes.array.isRequired
};


export default ItemList;