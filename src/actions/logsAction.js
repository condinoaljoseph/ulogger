import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SEARCH_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../actions/types';

export const getLogs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch(
      'https://my-json-server.typicode.com/condinoaljoseph/ulogger/logs'
    );
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const addLog = log => async dispatch => {
  try {
    setLoading();

    const res = await fetch(
      'https://my-json-server.typicode.com/condinoaljoseph/ulogger/logs',
      {
        method: 'POST',
        body: JSON.stringify(log),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const deleteLog = id => async dispatch => {
  try {
    setLoading();

    await fetch(
      `https://my-json-server.typicode.com/condinoaljoseph/ulogger/logs/${id}`,
      {
        method: 'DELETE'
      }
    );

    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const updateLog = log => async dispatch => {
  try {
    setLoading();

    const res = await fetch(
      `https://my-json-server.typicode.com/condinoaljoseph/ulogger/logs/${log.id}`,
      {
        method: 'PUT',
        body: JSON.stringify(log),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    const data = await res.json();

    dispatch({
      type: UPDATE_LOG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const searchLogs = text => async dispatch => {
  try {
    setLoading();

    const res = await fetch(
      `https://my-json-server.typicode.com/condinoaljoseph/ulogger/logs?q=${text}`
    );
    const data = await res.json();

    dispatch({
      type: SEARCH_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  };
};

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};