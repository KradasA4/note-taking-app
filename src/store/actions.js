import * as actionTypes from './constants';

const titleChange = (title) =>  ({ type: actionTypes.TITLE_CHANGE, title: title });
const contentChange = (content) => ({ type: actionTypes.CONTENT_CHANGE, content: content });
const addNote = (title, content, event) => ({type: actionTypes.ADD_NOTE, title: title, content: content, event: event });
const deleteNote = (id) => ({ type: actionTypes.DELETE_NOTE, targetId: id });
const selectActive = () => ({ type: actionTypes.SELECT_ACTIVE_NOTES });
const selectDeleted = () => ({ type: actionTypes.SELECT_DELETED_NOTES });

export {
  titleChange,
  contentChange,
  addNote,
  deleteNote,
  selectActive,
  selectDeleted
}