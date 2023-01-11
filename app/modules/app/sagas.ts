import { getType } from 'deox';
import { SagaIterator } from 'redux-saga';
import { Api } from 'services/api';
import { takeEvery, call } from 'typed-redux-saga';
import { resetStore } from './actions';

function* resetStoreSaga(): SagaIterator {
  yield* call(Api.clearAccessToken);
}

export function* watchApp(): SagaIterator {
  yield* takeEvery(getType(resetStore), resetStoreSaga);
}
