import { SagaIterator } from 'redux-saga';
import { all, EffectReturnType } from 'typed-redux-saga';

import { watchApp } from 'modules/app/sagas';
import { watchLogin } from 'modules/login/sagas';
import { watchErrors } from 'modules/errors/sagas';

export default function* rootSaga(): Generator<EffectReturnType<SagaIterator>> {
  yield* all([watchApp(), watchLogin(), watchErrors()]);
}
