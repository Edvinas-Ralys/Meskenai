export default function counterReducer(state, action) {
  let newSate = state

  switch (action.type) {
    case `add_1`:
      newSate = state + 1
      break
    case `rem_1`:
      newSate = state - 1
      break
    case `set_0`:
      newSate = 0
      break
    case `addAmount`:
      newSate = state + action.payload
      break
    case `error`:
      newSate = `ERROR!`
      break
    default:
      newSate = state
      break
  }
  return newSate
}
