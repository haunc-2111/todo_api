import { takeLatest, call, put, select, all } from 'redux-saga/effects';
import * as types from './constants';
import * as actions from './actions';
import axios from 'axios';
import * as settingApi from 'utils/settingApi';
// Individual exports for testing
export default function* todoAppSaga() {
  yield all([
    takeLatest(types.GET_LIST_ITEMS, workerSagaGetListItems)
  ])
}

function* workerSagaGetListItems() {
  try {
    const response = yield call(getListItems);
    console.log(response);
    yield put(actions.getListItemsSuccess(response.data));
  } catch (error) {
    yield put(actions.getListItemsFailure(error));
  }
}

const getListItems = () => (
  axios.get(
    `${settingApi.DOMAIN_SERVER_API}/to_do_items`
  )
)
