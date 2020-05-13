import * as actionTypes from './constants';

const initialState = {
  activeNotes: []
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_NOTE:
      return {
        ...state,
        activeNotes: [ ...state.activeNotes,
          {
            title: action.title,
            content: action.content,
            date: new Date().toLocaleString() 
          }
        ]
      }
    default:
      return state;
  }
}

export default reducer;