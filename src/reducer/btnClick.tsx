// const initialState = true;

// const changeTheNumber = (state = initialState, action: any) => {
//   console.log('action', action);
//   return state = !state;
// }

// export default changeTheNumber;

const initialState = {
  isPopupOpen: false, // Default state for popup
};

const changeTheNumber = (state = initialState, action: any) => {
  console.log('action', action)
  switch (action.type) {
    case "TOGGLE_POPUP":
      return {
        ...state,
        isPopupOpen: action.updateVal, // Toggle the popup state
      };
    default:
      return state;
  }
};

export default changeTheNumber;
