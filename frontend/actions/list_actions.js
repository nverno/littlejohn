import * as ListAPI from '../util/list_api_util';
import { receiveCurrentUser } from './session_actions';

export const RECEIVE_PUBLIC_LISTS = 'RECEIVE_PUBLIC_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const RECEIVE_USER_LISTS = 'RECEIVE_USER_LISTS';
export const REMOVE_LIST = 'REMOVE_LIST';
export const RECEIVE_LIST_ERRORS = 'RECEIVE_LIST_ERRORS';
export const CLEAR_LIST_ERRORS = 'CLEAR_LIST_ERRORS';
export const RECEIVE_OPEN_LIST = 'RECEIVE_OPEN_LIST';
export const RECEIVE_CLOSE_LIST = 'RECEIVE_CLOSE_LIST';
export const RECEIVE_CLOSE_ALL_LISTS = 'RECEIVE_CLOSE_ALL_LISTS';
export const OPEN_EDIT_LIST_MODAL = 'OPEN_EDIT_LIST_MODAL';
export const CLOSE_EDIT_LIST_MODAL = 'CLOSE_EDIT_LIST_MODAL';

export const closeEditListModal = () => ({
  type: CLOSE_EDIT_LIST_MODAL,
});

export const openEditListModal = (listId) => ({
  type: OPEN_EDIT_LIST_MODAL,
  listId,
});

export const closeAllLists = () => ({
  type: RECEIVE_CLOSE_ALL_LISTS,
});

export const closeList = (listId) => ({
  type: RECEIVE_CLOSE_LIST,
  listId,
});

export const openList = (listId) => ({
  type: RECEIVE_OPEN_LIST,
  listId,
});

export const clearListErrors = () => ({
  type: CLEAR_LIST_ERRORS,
});

export const receiveListErrors = (errors) => ({
  type: RECEIVE_LIST_ERRORS,
  errors: errors.responseJSON,
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

export const fetchUserLists = () => (dispatch) =>
  ListAPI.fetchUserLists().then(
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

export const createPublicList = (listForm) => (dispatch) =>
  ListAPI.createPublicList(listForm)
    .then((list) => dispatch(receiveList(list)))
    .fail((err) => dispatch(receiveListErrors(err)));

export const updateList = (list) => (dispatch) =>
  ListAPI.updateList(list)
    .then((list) => dispatch(receiveList(list)))
    .fail((err) => dispatch(receiveListErrors(err)));

export const followList = (userId, listId) => (dispatch) =>
  ListAPI.followList(userId, listId).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (err) => dispatch(receiveListErrors(err))
  );

export const unfollowList = (userId, listId) => (dispatch) =>
  ListAPI.unfollowList(userId, listId)
    .then((user) => dispatch(receiveCurrentUser(user)))
    .fail((err) => dispatch(receiveListErrors(err)));
