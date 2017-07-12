import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { firebaseApp } from '../index';
import config from '../config/github.config';

export const login = (): Observable<any> => {
  return Observable.create((observer: Observer<any>) => {
    firebaseApp.auth().signInWithPopup(setupProvider())
      .then((result) => {
        observer.next(result);
      })
      .catch((error) => {
        observer.error(error);
      });
  });
};

export const initFirebase = () => {
  return firebase.initializeApp(config);
};

const setupProvider = () => {
  const provider = new firebase.auth.GithubAuthProvider();
  provider.addScope(`gist`);
  return provider;
};

export const logout = (): Observable<any> => {
  return Observable.create((observer: Observer<any>) => {
    firebaseApp
      .auth()
      .signOut()
      .then((result) => {
        observer.next(result);
      })
      .catch((error) => {
        observer.error(error);
      });
  });
};
