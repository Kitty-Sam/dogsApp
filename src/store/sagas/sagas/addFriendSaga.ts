import { database } from '../../../utils/getDataBaseURL';
import { call, select } from '@redux-saga/core/effects';
import { getCurrentUserId } from '../../selectors/loginSelector';
import { AddFriendActionType } from '../sagaActions/addFriend';
import { fetchFriendsIdsWorker } from './fetchFriendsIdsSaga';

export function* addFriendWorker({ payload }: AddFriendActionType) {
  const { id } = payload;

  try {
    const currentUserId: string = yield select(getCurrentUserId);

    yield database.ref(`/users/${currentUserId}`).child('friends').child(`${id}`).set({
      id: id,
    });

    // yield put(addFriendAC({ id }));
    yield call(fetchFriendsIdsWorker);
  } catch (error: any) {
    console.log('### error', error);
  }
}
