import { put } from '@redux-saga/core/effects';
import { auth } from '../../../../firebase';
import { toggleIsLoggedAC } from '../../actions/loginAC';
import { signOut } from 'firebase/auth';

export function* googleSignOutWorker() {
  try {
    yield signOut(auth);
    yield put(toggleIsLoggedAC({ isLogged: false }));
  } catch (error: any) {
    console.warn(error);
  }
}
