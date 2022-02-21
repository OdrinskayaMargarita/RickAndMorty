import { ADD_USER } from '../Constants/Constants';

const initialState = {

}

export const UsersReducer = (state = initialState, action) => {
    switch(action.type){
      case ADD_USER : {
      }
      default:
        return state;
  }
}

export const addUser = () => ({
  type: ADD_USER,
})