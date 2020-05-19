import * as actionTypes from './constants';

const initialState = {
  inputTitle: '',
  inputContent: '' ,
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.TITLE_CHANGE:
      return {
        ...state,
        inputTitle: action.title
      }
    case actionTypes.CONTENT_CHANGE:
      return {
        ...state,
        inputContent: action.content
      }
    case actionTypes.CLEAR_INPUT:
      return {
        ...state,
        inputTitle: '',
        inputContent: ''
      }
    default:
      return state;
  }
}

export default reducer;