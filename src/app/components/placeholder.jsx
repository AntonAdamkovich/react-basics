import React from 'react';
import PropTypes from 'prop-types';


function Placeholder({ placeholderText }) {
    return (
        <div className="placeholder">
            {placeholderText}
        </div>
    );
}

Placeholder.propTypes = {
    placeholderText: PropTypes.string,
};

Placeholder.defaultProps = {
    placeholderText: 'Loading...',
};

export default Placeholder;
