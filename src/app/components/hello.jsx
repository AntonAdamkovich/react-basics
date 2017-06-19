import React from 'react';
import PropTypes from 'prop-types';

function Hello({ name, list }) {
    return (
        <div>
            <h1>{name}</h1>
            <ul>
                {list.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    );
}

Hello.propTypes = {
    list: PropTypes.arrayOf(PropTypes.number).isRequired,
    name: PropTypes.number.isRequired,
};

export default Hello;
