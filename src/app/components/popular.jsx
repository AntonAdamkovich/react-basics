import React from 'react';

import SelectLanguage from './select-language';
import RepositoriesList from './repositories-list';

import LoadData from '~/utils/load-data';


class Popular extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repositories: null,
        };

        // this.updateLanguage = this.updateLanguage.bind(this);
    }

    async componentDidMount() {
        await this.updateLanguage(this.state.selectedLanguage);
    }

    handleLanguageChanging = (event) => {
        const target = event.nativeEvent.target;
        if (target.matches('li')) {
            this.updateLanguage(target.innerHTML);
        }
    }

    updateLanguage(language) {
        LoadData.fetchPopularRepositories(language).then((response) => {
            return this.setState({
                selectedLanguage: language,
                repositories: response.items,
            });
        });
    }

    render() {
        let repList = null;
        if (this.state.repositories !== null) {
            repList = <RepositoriesList repositories={this.state.repositories} />;
        } else {
            repList = 'loading';
        }

        return (
            <div>
                <SelectLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    updateLanguage={this.handleLanguageChanging}
                />
                {repList}
            </div>
        );
    }
}

export default Popular;
