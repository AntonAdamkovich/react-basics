import React from 'react';
import PropTypes from 'prop-types';

function SelectLanguage(props) {
    const languages = ['All', 'JavaScript', 'Java', 'Ruby', 'Python'];

    return (
        <ul onClick={props.updateLanguage} role="presentation" className={'languages'}>
            {languages.map((lang) => {
                return (
                    <li
                        className={lang === props.selectedLanguage ? 'active' : null}
                        key={lang}
                    >
                        {lang}
                    </li>
                );
            })}
        </ul>
    );
}

SelectLanguage.propTypes = {
    updateLanguage: PropTypes.func.isRequired,
    selectedLanguage: PropTypes.string.isRequired,
};

export default SelectLanguage;
