const languageActions = {};

languageActions.setLanguage = (dispath, string) => {
  dispath({
    type: 'SET_LANGUAGE',
    payload: string,
  });
};

languageActions.setLangAccount = (dispath, string) => {
  dispath({
    type: 'SET_LANGUAGE_ACCOUNT',
    payload: string,
  });
};

languageActions.setImage = (dispath, image) => {
  dispath({
    type: 'SET_IMAGE',
    payload: image,
  });
};

export default languageActions;
