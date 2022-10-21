import { database } from '../../../utils/getDataBaseURL';

import { call, select } from '@redux-saga/core/effects';
import { getCurrentUserId } from '../../selectors/loginSelector';
import { RemoveFriendActionType } from '../sagaActions/removeFriend';
import { fetchFriendsIdsWorker } from './fetchFriendsIdsSaga';

export function* removeFriendWorker({ payload }: RemoveFriendActionType) {
  const { id } = payload;

  try {
    const currentUserId: string = yield select(getCurrentUserId);

    yield database.ref(`/users/${currentUserId}`).child('friends').child(`${id}`).remove();

    //yield put(removeFriendAC({ id }));
    yield call(fetchFriendsIdsWorker);
  } catch (error: any) {
    console.log('### error', error);
  }
}
