import { combineReducers } from 'redux';
import INITIAL_STATE, { AppState } from '../store';
import { actionsTypes } from '../actions/actiontypes';
import { ReduxActionType } from '../actions/actions';

const helperSetUrl = (state: AppState, payload: string) => {
  return {
    ...state,
    url: payload,
  };
};
const helperClearStore = (state: AppState) => {
  return INITIAL_STATE;
};

const reducerOfApp = (state = INITIAL_STATE, action: ReduxActionType) => {
  switch (action.type) {
    case actionsTypes.SET_URL:
      return helperSetUrl(state, action.payload)

    case actionsTypes.CLEAR_STORE:
      return helperClearStore(state);

    default:
      return state;
  }
};

export default combineReducers({
  appstate: reducerOfApp,
});
