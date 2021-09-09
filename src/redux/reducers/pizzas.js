const initialState = {
  items: [],
  isLoading: true
}

const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PIZZAS':
      return {
        ...state,
        items: action.payload,
        isLoading: false
      }
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload
      }
    default:
      return state
  }
}

export default pizzasReducer;