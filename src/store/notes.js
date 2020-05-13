import * as actionTypes from './constants';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  activeNotes: [],
  deletedNotes: [],
  currentNotes: []
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_NOTE:
      if(action.content) {
        action.event.preventDefault();
        return {
          ...state,
          activeNotes: [ 
            ...state.activeNotes,
            {
              id: uuidv4(),
              title: action.title,
              content: action.content,
              date: new Date().toLocaleString() 
            }
          ],
        }
      }
    case actionTypes.DELETE_NOTE:
      const updatedActiveNotes = state.activeNotes.filter((note) => {
        return note.id !== action.targetId
      })
      const deletedNote = state.activeNotes.filter((note) => {
        return note.id === action.targetId
      })
      return {
        ...state,
        activeNotes: updatedActiveNotes,
        deletedNotes: [
          ...state.deletedNotes,
          deletedNote[0]
        ],
        // currentNotes: updatedActiveNotes
      }
    
    case actionTypes.SELECT_ACTIVE_NOTES:
      return {
        ...state,
        currentNotes: state.activeNotes,
      }
    case actionTypes.SELECT_DELETED_NOTES:
      return {
        ...state,
        currentNotes: state.deletedNotes
      }
    default:
      return state;
  }
}

export default reducer;