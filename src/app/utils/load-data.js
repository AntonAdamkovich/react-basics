
class LoadData {
    /**
     *  fetch 25 popular repositories of the language
     *
     * @static
     * @param {string} language - name of the language to fetch from github API
     * @returns {promise}
     * @memberof LoadData
     */
    static fetchPopularRepositories(language) {
        const link = `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`;
        return fetch(link).then(data => data.json());
    }
}

export default LoadData;
