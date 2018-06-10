export const LIST_PATH = '/dashboard'
export const ACCOUNT_PATH = '/account'
export const LOGIN_PATH = '/login'
export const SIGNUP_PATH = '/signup'
export const DASHBOARD_PATH = '/'
export const INVEST_PATH = '/invest'
export const WALLET_PATH = '/wallet'
export const PROFILE_PATH = '/profiles'
export const SETTINGS_PATH = '/settings'
export const REFERRALS_PATH = '/referrals'
export const REF_PATH = '/ref'
export const TRANSACTION_PATH = '/transaction'

//Admin
export const ADMIN_PATH = ''

export const LOGIN_FORM_NAME = 'login'
export const SIGNUP_FORM_NAME = 'signup'
export const REF_FORM_NAME = 'ref'
export const NEW_PROJECT_FORM_NAME = 'newProject'
export const ACCOUNT_FORM_NAME = 'account'

// Firestore Collection
export const INVEST_COLLECTION = 'Investments'
export const BANK_COLLECTION = 'Banks'
export const TRANSACTION_COLLECTION = 'Transactions'



export const formNames = {
  account: ACCOUNT_FORM_NAME,
  signup: SIGNUP_FORM_NAME,
  login: LOGIN_FORM_NAME,
  ref: REF_FORM_NAME
}

export const paths = {
  list: LIST_PATH,
  account: ACCOUNT_PATH,
  login: LOGIN_PATH,
  signup: SIGNUP_PATH,
  dashboard: DASHBOARD_PATH
}

export default { ...paths, ...formNames }
