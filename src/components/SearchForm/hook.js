import { ACTIONS } from '../../constants'
import { useReducer } from 'react'

const { UPDATE_KEYWORD, UPDATE_RATING } = ACTIONS

const ACTIONS_REDUCERS = {
  [UPDATE_KEYWORD]: (state, action) => ({
    ...state,
    keyword: action.payload,
    times: state.times + 1
  }),
  [UPDATE_RATING]: (state, action) => ({
    ...state,
    rating: action.payload
  })
}

const reducer = (state, action) => {
  const actionReducer = ACTIONS_REDUCERS[action.type]
  return actionReducer ? actionReducer(state, action) : state
}

export default function useForm ({
  initialKeyword = '',
  initialRating = 'g'
} = {}) {
  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
    times: 0
  })

  const { keyword, rating, times } = state

  const updateKeyword = (keyword) => {
    dispatch({
      type: UPDATE_KEYWORD,
      payload: keyword
    })
  }

  const updateRating = (rating) => {
    dispatch({
      type: UPDATE_RATING,
      payload: rating
    })
  }

  return {
    keyword, rating, times, updateKeyword, updateRating
  }
}
