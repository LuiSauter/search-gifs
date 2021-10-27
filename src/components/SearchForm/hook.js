import { ACTIONS } from '../../constants'
import { useReducer } from 'react'

const { UPDATE_KEYWORD, UPDATE_RATING } = ACTIONS

const ACTIONS_REDUCERS = {
  [UPDATE_KEYWORD]: (state, action) => ({
    ...state,
    keyword: action.payload.keyword,
    times: action.payload.times
  }),
  [UPDATE_RATING]: (state, action) => ({
    ...state,
    rating: action.payload.rating,
    times: action.payload.times
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
    keyword: decodeURI(initialKeyword),
    rating: initialRating,
    times: 0
  })

  const { keyword, rating, times } = state
  const updateKeyword = (keyword) => {
    dispatch({
      type: UPDATE_KEYWORD,
      payload: { keyword, times: keyword.length === 0 ? 0 : keyword.length + 1 }
    })
  }

  const updateRating = (rating) => {
    dispatch({
      type: UPDATE_RATING,
      payload: { rating, times: times + 1 }
    })
  }

  return {
    keyword, rating, times, updateKeyword, updateRating
  }
}
