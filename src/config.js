/**
 * NOTE: This file is ignored from git tracking. In a CI environment it is
 * generated by firebase-ci or build/create-config.js based on config in
 * .firebaserc (see .travis.yml). This is done so that environment specific
 * settings can be applied.
 */

export const env = "development";

// Config for firebase
export const firebase = {
  apiKey: "AIzaSyAi-NsCjeMjT1A50mPq_oqftswQb8HaPnA",
  authDomain: "coinvnd.firebaseapp.com",
  databaseURL: "https://coinvnd.com",
  projectId: "coinvnd",
  storageBucket: "coinvnd.appspot.com"
};

// Config for react-redux-firebase
// For more details, visit https://prescottprue.gitbooks.io/react-redux-firebase/content/config.html
export const reduxFirebase = {
  userProfile: "users", // root that user profiles are written to
  enableLogging: false, // enable/disable Firebase Database Logging
  useFirestoreForProfile: true, // Save profile to Firestore instead of Real Time Database
  updateProfileOnLogin: false ,// enable/disable updating of profile on login
  // profileParamsToPopulate: [
  //   { child: 'role', root: 'roles' }, // populates user's role with matching role object from roles
  // ],
  profileFactory: user => {
    return {
      email: user.email || user.providerData[0].email,
      displayName: user.providerData[0].displayName,
      avatarUrl: user.avatarUrl || user.providerData[0].photoURL,
      role: "user",
      providerData: user.providerData
    };
  }
  // profileDecorator: (userData) => ({ roles: userData.roles }) // customize format of user profile
};

export default { env, firebase, reduxFirebase };
