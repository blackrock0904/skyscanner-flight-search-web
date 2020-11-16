import { LOG_IN, LOG_OUT, LOAD_TO_STATE, START_FETCH } from './ActionTypes';

export const logIn = () => {
  return {type: LOG_IN};
}

export const logOut = ()=> {
  return {type: LOG_OUT};
}

export const loadToState = (data) => ({
  type: LOAD_TO_STATE,
  payload: data
})

export const startFeth = () => {
  return { type: START_FETCH}
}
