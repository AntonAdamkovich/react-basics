/**
 * fetching data from github API
 *
 * @param {string} language - programming language to fetch
 * @returns {promise} - request result
 */
function fetchPopularRepositories(language) {
    const link = `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`;
    return fetch(link).then(data => data.json());
}

export default fetchPopularRepositories;
