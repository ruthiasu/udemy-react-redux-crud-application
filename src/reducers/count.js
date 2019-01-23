import { INCREMENT, DECREMENT } from '../actions'

const initialState = { value: 0 }

export default (state, actioni, action) => {
  switch (ction.type) {
    case INCREMENT:
      return { value: state.value + 1 }
    case DECREMENT:
      return { value: state.value - 1 }
    default :
      return state
  }
}
