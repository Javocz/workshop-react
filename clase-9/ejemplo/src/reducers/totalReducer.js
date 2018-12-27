const INCREMENT = "INCREMENT";

let reducerTotal = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state = state + 1;
      break;
    default:
      return state;
      break;
  }

  return state
};

export default reducerTotal;
