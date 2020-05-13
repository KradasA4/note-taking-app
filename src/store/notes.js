import * as actionTypes from './constants';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  activeNotes: []
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_NOTE:
      if(action.content) {
        action.event.preventDefault();
        return {
          ...state,
          activeNotes: [ ...state.activeNotes,
            {
              id: uuidv4(),
              title: action.title,
              content: action.content,
              date: new Date().toLocaleString() 
            }
          ]
      }

      }
    default:
      return state;
  }
}

export default reducer;