// import { bindActionCreators } from 'redux';
import {
  bool,
  func
} from 'prop-types';

import isLanguageLoaded from '../../services/isLanguageLoaded';

export default {
  propTypes: {
    isLangLoaded: bool.isRequired
  },
  contextTypes: {
    t: func
  },
  mapStateToProps: ({ i18nState }) => ({
    isLangLoaded: isLanguageLoaded(i18nState)
  }),
  mapDispatchToProps: null
};
