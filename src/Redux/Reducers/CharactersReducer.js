import {
  GET_CHARACTER_LIST, GET_CHARACTER_ITEM, MODAL_STATUS, CLEAR_CHARACTER_ITEM, WRITE_PARAMS, CLEAR_FILTER} from '../Constants/Constants';

const initialState = {
  characterList: [],
  characterItem: {},
  params: {
    currentPage: 1,
    filterGender: '',
    filterStatus: '',
    filterSpecies: '',
  },
  modalStatus: false
}


export const CharactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case WRITE_PARAMS : {
      switch (action.typeFilter) {
        case 'page' : {
          return {...state, params: {...state.params, currentPage: action.valueFilter}}
        }
        case 'gender' : {
          return {...state, params: {...state.params, filterGender: action.valueFilter}}
        }
        case 'status' : {
          return {...state, params: {...state.params, filterStatus: action.valueFilter}}
        }
        case 'species' : {
          return {...state, params: {...state.params, filterSpecies: action.valueFilter}}
        }
        default:
          return state;
      }
    }
    case CLEAR_FILTER : {
      return {...state, params: {...state.params, filterGender: '', filterStatus: '', filterSpecies: ''}}
    }
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