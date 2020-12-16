import * as ListAPI from '../util/list_api_util';

export const RECEIVE_PUBLIC_LISTS = 'RECEIVE_PUBLIC_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const RECEIVE_USER_LISTS = 'RECEIVE_USER_LISTS';
export const REMOVE_LIST = 'REMOVE_LIST';
export const RECEIVE_LIST_ERRORS = 'RECEIVE_LIST_ERRORS';
export const CLEAR_LIST_ERRORS = 'CLEAR_LIST_ERRORS';

export const clearListErrors = () => ({
  type: CLEAR_LIST_ERRORS,
});

export const receiveListErrors = (errors) => ({
  type: RECEIVE_LIST_ERRORS,
  errors,
});

export const removeList = (listId) => ({
  type: REMOVE_LIST,
  listId,
});

export const receiveUserLists = (lists) => ({
  type: RECEIVE_USER_LISTS,
  lists,
});

export const receiveList = (list) => ({
  type: RECEIVE_LIST,
  list,
});

export const receivePublicLists = (lists) => ({
  type: RECEIVE_PUBLIC_LISTS,
  lists,
});

export const fetchPublicLists = () => (dispatch) =>
  ListAPI.fetchPublicLists().then(
    (lists) => dispatch(receivePublicLists(lists)),
    (err) => dispatch(receiveListErrors(err))
  );

export const fetchUserLists = (userId) => (dispatch) =>
  ListAPI.fetchUserLists(userId).then(
    (lists) => dispatch(receiveUserLists(lists)),
    (err) => dispatch(receiveListErrors(err))
  );

export const fetchList = (listId) => (dispatch) =>
  ListAPI.fetchList(listId).then(
    (list) => dispatch(receiveList(list)),
    (err) => dispatch(receiveListErrors(err))
  );

export const deleteList = (listId) => (dispatch) =>
  ListAPI.deleteList(listId).then(
    () => dispatch(removeList(listId)),
    (err) => dispatch(receiveListErrors(err))
  );

export const createUserList = (userId, list) => (dispatch) =>
  ListAPI.createUserList(userId, list).then(
    (list) => dispatch(receiveList(list)),
    (err) => dispatch(receiveListErrors(err))
  );

export const createPublicList = (list) => (dispatch) =>
  ListAPI.createPublicList(list).then(
    (list) => dispatch(receiveList(list)),
    (err) => dispatch(receiveListErrors(err))
  );

export const updateList = (list) => (dispatch) => (
  ListAPI.updateList(list).then(
    list => dispatch(receiveList(list)),
    err => dispatch(receiveListErrors(err))
  )
);
