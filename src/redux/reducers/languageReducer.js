import { initState } from '../initialState';
import french from '../../assets/lg/FR';
import dutch from '../../assets/lg/NL';

const langMap = [
  {
    langCode: 'fr',
    lg: french,
  },
  {
    langCode: 'nl',
    lg: dutch,
  },
];

const languageReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      const newLang = langMap.find(({ langCode }) => langCode === action.payload);
      if (newLang) {
        return {
          ...state,
          language: newLang.lg,
        };
      }
      return state;

    case 'SET_LANGUAGE_ACCOUNT':
      return {
        ...state,
        langAccount: action.payload,
      };
    case 'SET_IMAGE':
      return {
        ...state,
        image: action.payload,
      };
    default:
      return state;
  }
};

export default languageReducer;
