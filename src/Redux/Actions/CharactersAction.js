import {api} from "../../api/api"
import {CLEAR_CHARACTER_ITEM, GET_CHARACTER_ITEM, GET_CHARACTER_LIST, MODAL_STATUS} from '../Constants/Constants';

//Get all persons
export const getCharacterList = (data) => ({
  type: GET_CHARACTER_LIST,
  data: data
})

//Get persons on every pages
export const asyncGetCharacterListPage = (numberPage) => async (dispatch) => {
  await (api.getCharacterListPage(numberPage))
  .then(({data}) => {
    dispatch(getCharacterList(data))
  }).catch(err => {
    return err
  });
};


//Get single person
export const getSingleCharacter = (data) => ({
  type: GET_CHARACTER_ITEM,
  data: data
})

export const asyncGetSingleCharacter = (idCharacter) => async (dispatch) => {
  await api.getSingleCharacter(idCharacter).then(({data}) => {
    dispatch(getSingleCharacter(data))
  }).catch(err => {
    return err
  });
};

//Change modal status
export const saveModalStatus = (data) => ({
  type: MODAL_STATUS,
  data: data
})


//Clear store single character
export const clearCharacterItem = () => ({
  type: CLEAR_CHARACTER_ITEM,
})