import React from 'react';

class Popular extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
        };

        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(event) {
        const target = event.nativeEvent.target;
        if (target.matches('li')) {
            this.setState(() => {
                return {
                    selectedLanguage: target.innerHTML,
                };
            });
        }
    }

    render() {
        const languages = ['All', 'JavaScript', 'Java', 'Ruby', 'Python'];
        return (
            <ul onClick={this.updateLanguage} role="presentation" className={'languages'}>
                {languages.map(lang => <li className={lang === this.state.selectedLanguage ? 'active' : null} key={lang}>{lang}</li>)}
            </ul>
        );
    }
}

export default Popular;
