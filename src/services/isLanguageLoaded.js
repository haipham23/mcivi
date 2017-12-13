const isLanguageLoaded = ({ translations }) =>
  translations && Object.keys(translations).length === 2;

export default isLanguageLoaded;
