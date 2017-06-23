import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    static propTypes = {
        list: PropTypes.arrayOf(PropTypes.number).isRequired,
        name: PropTypes.number.isRequired,
    };

    static defaultProps = {
        list: [3, 2, 1],
        name: 21,
    };

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillMount() {
        console.log('willMount');
    }

    componentDidMount() {
        console.log('didMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('reseiveProps');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('willUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('didUpdate');
    }

    componentWillUnmount() {
        console.log('willUnMount');
    }

    render() {
        console.log('render');

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

/* App.propTypes = {
    list: PropTypes.arrayOf(PropTypes.number).isRequired,
    name: PropTypes.number.isRequired,
};

App.defaultProps = {
    list: [3, 2, 1],
    name: 21,
};*/

export default App;
