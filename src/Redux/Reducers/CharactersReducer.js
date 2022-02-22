import {GET_CHARACTER_LIST, GET_CHARACTER_ITEM, MODAL_STATUS, CLEAR_CHARACTER_ITEM} from '../Constants/Constants';

const initialState = {
  characterList: [],
  characterItem: {},
  modalStatus: false
}


export const CharactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTER_LIST : {
      return {...state, characterList: action.data}
    }
    case GET_CHARACTER_ITEM : {
      return {...state, characterItem: action.data}
    }
    case CLEAR_CHARACTER_ITEM : {
      return {...state, characterItem: {}}
    }
    case MODAL_STATUS : {
      return {...state, modalStatus: action.data}
    }
    default:
      return state;
  }
}