import { actionTypes } from "../actions/type";

let initialState = {
  userList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_LIST:
      let cloneList = action.payload;
      return { ...state, userList: cloneList };
    default:
      return state;
  }
};

export default reducer;
