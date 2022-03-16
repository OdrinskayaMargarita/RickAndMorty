import {api} from "../../api/api"
import {
  CLEAR_CHARACTER_ITEM,
  GET_CHARACTER_ITEM,
  GET_CHARACTER_LIST,
  MODAL_STATUS,
  WRITE_PARAMS,
  CLEAR_FILTER,
} from '../Constants/Constants';


//Get all persons
export const getCharacterList = (data) => ({
  type: GET_CHARACTER_LIST,
  data: data,
})

//Get persons on every pages
export const asyncGetCharacterListPage = (currentPage, filterGender, filterStatus, filterSpecies) => async (dispatch) => {
  await (api.getCharacterListPage(currentPage, filterGender, filterStatus, filterSpecies))
    .then(({data}) => {
      dispatch(getCharacterList(data, currentPage))
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


// Write parameters
export const writeParams = (typeFilter, valueFilter) => ({
  type: WRITE_PARAMS,
  typeFilter: typeFilter,
  valueFilter: valueFilter,
})

//Clear parameters
export const clearParams = () => ({
  type: CLEAR_FILTER,
})



//Change modal status
export const saveModalStatus = (data) => ({
  type: MODAL_STATUS,
  data: data
})


//Clear store single character
export const clearCharacterItem = () => ({
  type: CLEAR_CHARACTER_ITEM,
})