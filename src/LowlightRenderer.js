import React from 'react';
import Lowlight from 'react-lowlight';

// This feels really hacky, but I'm not sure of a better solution.
// We can't just use import * from 'highlight.js/lib/languages', because
// highlight.js does not include an index.js file in the languages dir.
const importLanguage = language => require(`highlight.js/lib/languages/${language}`);

export default (languageDefinitions) => {
  languageDefinitions.map(name => {
    const language = importLanguage(name);
    Lowlight.registerLanguage(name, language);
  });

  const Code = ({ className = '', children }) => {
    const langClass = className.split('-')[1];
    const language = langClass !== 'null' ? langClass : '';
    const value = children || '';
    const props = { language, value, inline: true };

    return language ? <Lowlight {...props} /> : <code>{ value }</code>;
  };
  Code.propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.node
  };

  return Code;
};
