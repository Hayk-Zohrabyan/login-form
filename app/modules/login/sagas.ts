import { takeLatest, call, put, select, delay } from 'typed-redux-saga';
import { getType } from 'deox';
import { SagaIterator } from 'redux-saga';
import { ShowPopUpMessage } from 'services/popUpMessage';
import { sendLoginInfo } from './actions';

function* sendLoginInfoSaga(): SagaIterator {
  console.log(1);
}

export function* watchLogin(): SagaIterator {
  yield* takeLatest(getType(sendLoginInfo.request), sendLoginInfoSaga);
}
