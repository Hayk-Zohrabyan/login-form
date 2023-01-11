import { ActionType, getType } from 'deox';
import { SagaIterator } from 'redux-saga';
// import NetInfo from '@react-native-community/netinfo';
import { put, takeEvery, call } from 'redux-saga/effects';
import { processRequestError, changeError } from './actions';
import { ShowPopUpMessage } from 'services/popUpMessage';

function* processRequestErrorSaga({
  payload: { error, failAction, module, field, failPayload },
}: ActionType<typeof processRequestError>): SagaIterator {
  let popUpError = '';
  let fieldError = '';

  // eslint-disable-next-line no-console
  console.log(`action type: ${failAction}`);
  // eslint-disable-next-line no-console
  console.log('action error: ', error);
  if (error.response) {
    switch (error.response.status) {
      case 401:
      case 400: {
        const { data } = error.response;
        // data.error.message : 'message'
        if (field) {
          fieldError = data.error.message;
        } else {
          popUpError = data.error.message;
        }
        break;
      }
      case 404:
        break;
      default:
        // 500, 502
        popUpError = 'server_error';
        break;
    }
  } else if (error.request) {
    if (error.request.status === 0) {
      popUpError = 'network_error';
      // const unsubscribe = NetInfo.addEventListener(state => {
      //   console.log('Connection type', state.type);
      //   console.log('Is connected?', state.isConnected);
      // });
      //
      // return () => {
      //   unsubscribe();
      // };
    }
  } else {
    popUpError = 'went_wrong';
  }

  if (fieldError) {
    yield put(changeError({ module, field, value: fieldError }));
  } else {
    yield call(ShowPopUpMessage, popUpError, true);
  }
  yield put(failAction({ ...failPayload }));
}

export function* watchErrors(): SagaIterator {
  yield takeEvery(getType(processRequestError), processRequestErrorSaga);
}
