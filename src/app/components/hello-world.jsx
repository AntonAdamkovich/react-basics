import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <ul>
                    {this.props.list.map(item => <li key={item}>{item}</li>)}
                </ul>
            </div>
        );
    }
}

App.propTypes = {
    list: PropTypes.arrayOf(PropTypes.number).isRequired,
    name: PropTypes.number.isRequired,
};

App.defaultProps = {
    list: [3, 2, 1],
    name: 21,
};

export default App;
