import React from 'react';
import PropTypes from 'prop-types';

const ItemList = ({ items }) => (
    <table className="table">
         <thead>
            <tr>
                <th>Title</th>
                <th>Timestamp</th>
            </tr>
        </thead>
        <tbody>
           {items.map((item) => {
               console.log(item.title);
           })}
        </tbody>
    </table>
);
 
ItemList.propTypes = {
    items: PropTypes.array.isRequired
};


export default ItemList;