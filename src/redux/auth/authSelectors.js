const getAuthSelector = state => state.auth.tokens.idToken;
const getEmailSelector = state => state.auth.tokens.email;

export { getAuthSelector, getEmailSelector };
