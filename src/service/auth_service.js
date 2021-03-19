import firebase from 'firebase';

class AuthService {
  login(provicerName) {
    const authProvider = new firebase.auth[`${providerName}AutoProvider`]();
    return firebase.auto().singInWithPopup(authProvider);
  }
}

export default AuthService;
