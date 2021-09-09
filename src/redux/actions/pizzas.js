import axios from "axios";

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items
})

export const setLoading = (payload) => ({
  type: 'SET_LOADING',
  payload
})

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoading(true))
  axios.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`
    )
    .then(({ data }) => {
      dispatch(setPizzas(data))
  })
    .catch(err => console.error(err))
}