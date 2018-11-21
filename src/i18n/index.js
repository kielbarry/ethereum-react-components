
const CreateAccountForm = {
  'mist.popupWindows.requestAccount.enterPassword': 'Enter password',
  'mist.popupWindows.requestAccount.repeatPassword': 'Repeat password',
  'mist.popupWindows.importAccount.buttons.showPassword': 'Show password',
  'mist.popupWindows.requestAccount.creating': 'Creating Account ...',
  'mist.popupWindows.requestAccount.title': 'Create Account',
  'buttons.ok': 'ok',
  'buttons.cancel': 'cancel',
};

const lang = {
  ...CreateAccountForm,
};

const i18n = {
  t: k => (lang[k] ? lang[k] : k),
};

export default i18n;
