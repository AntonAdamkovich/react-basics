import React from 'react';
import SelectLanguage from './select-language';
import RepositoriesList from './repositories-list';
import Placeholder from './placeholder';

import LoadData from '~/utils/load-data';


class Popular extends React.PureComponent {
    state = {
        selectedLanguage: 'All',
        repositories: null,
    };

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }

    handleLanguageChange = (event) => {
        const target = event.nativeEvent.target;
        if (target.matches('li')) {
            this.updateLanguage(target.innerHTML);
        }
    }

    async updateLanguage(language) {
        await LoadData.fetchPopularRepositories(language)
        .then(response => this.setState({
            selectedLanguage: language,
            repositories: response.items,
        }));
    }

    render() {
        let repList = null;
        if (this.state.repositories !== null) {
            repList = <RepositoriesList repositories={this.state.repositories} />;
        } else {
            repList = <Placeholder />;
        }

        return (
            <div>
                <SelectLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    updateLanguage={this.handleLanguageChange}
                />
                {repList}
            </div>
        );
    }
}

export default Popular;
