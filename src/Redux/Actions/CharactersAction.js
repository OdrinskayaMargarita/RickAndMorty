import {api} from "../../api/api"
import {CLEAR_CHARACTER_ITEM, GET_CHARACTER_ITEM, GET_CHARACTER_LIST, MODAL_STATUS} from '../Constants/Constants';

//Get all persons
export const getCharacterList = (data) => ({
  type: GET_CHARACTER_LIST,
  data: data
})

export const asyncGetCharacterList = () => async (dispatch, getState) => {
  let data = await api.getCharacterList().then(res => {
    dispatch(getCharacterList(res.data))
  }).catch(err => {
    return false
  });
};


//Get persons on every pages
export const asyncGetCharacterListPage = (numberPage) => async (dispatch, getState) => {
  let data = await api.getCharacterListPage(numberPage).then(res => {
    dispatch(getCharacterList(res.data))
  }).catch(err => {
    return false
  });
};


//Get single person
export const getSingleCharacter = (data) => ({
  type: GET_CHARACTER_ITEM,
  data: data
})

export const asyncGetSingleCharacter = (idCharacter) => async (dispatch, getState) => {
  let data = await api.getSingleCharacter(idCharacter).then(res => {
    dispatch(getSingleCharacter(res.data))
  }).catch(err => {
    return false
  });
};

//Change modal status
export const saveModalStatus = (data) => ({
  type: MODAL_STATUS,
  data: data
})


//Clear store single character
export const clearCharacterItem = (data) => ({
  type: CLEAR_CHARACTER_ITEM,
  data: data
})