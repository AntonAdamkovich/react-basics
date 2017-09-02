import React from 'react';
import PropTypes from 'prop-types';

function RepositoriesList(props) {
    return (
        <ul className={'repositories-list'}>
            {props.repositories.map((rep, index) => (
                <li key={rep.name}>
                    <section className={'repository'}>
                        <h1># {index + 1}</h1>
                        <figure>
                            <p>
                                <a
                                    href={rep.owner.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={rep.owner.avatar_url}
                                        alt="repository logo"
                                    />
                                </a>
                            </p>
                            <figcaption>
                                <h2>{rep.name}</h2>
                                <h3>{rep.owner.login}</h3>
                                <p>
                                    stars: {rep.stargazers_count}
                                </p>
                            </figcaption>
                        </figure>
                    </section>
                </li>
            ))}
        </ul>
    );
}
// TODO: add prop types for all fields
RepositoriesList.propTypes = {
    repositories: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
    })).isRequired,
};

export default RepositoriesList;
