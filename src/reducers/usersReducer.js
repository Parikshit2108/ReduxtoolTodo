let initialState = [];

let usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return [...action.payload];
    default:
      return state;
  }
};

export default usersReducer;
