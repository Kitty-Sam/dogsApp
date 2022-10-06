import { database } from '../../../utils/getDataBaseURL';

import { put } from '@redux-saga/core/effects';
import { AddNewMapMarkActionType } from '../sagaActions/addNewMapMark';
import { addMapMarkAC } from '../../actions/mapMarksAC';

export function* addNewMapMarkWorker({ payload }: AddNewMapMarkActionType) {
  const { newMapMark } = payload;
  try {
    yield database
      .ref(`/mapMarks/`)
      .child(`${newMapMark.id}`)
      .set({
        ...newMapMark,
      });
    yield put(
      addMapMarkAC({
        ...newMapMark,
      }),
    );
  } catch (error: any) {
    console.warn(error);
  }
}
