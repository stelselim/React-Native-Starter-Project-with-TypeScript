import { AppState } from "react-native";
import { actionsTypes } from "./actiontypes";

export interface ReduxActionType {
  type: string,
  payload: any,
}

const setUrl = (key: string): ReduxActionType => ({
  type: actionsTypes.SET_URL,
  payload: key,
});


const clearStore = (key: AppState): ReduxActionType => ({
  type: actionsTypes.CLEAR_STORE,
  payload: key,
});




export {
  setUrl,
  clearStore,
};
