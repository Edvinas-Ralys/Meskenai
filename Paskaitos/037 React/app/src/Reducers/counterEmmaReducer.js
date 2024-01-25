
import * as c from "../Constants/counterConst"

export default function counterEmmaReducer(state, action) {
  let newSate = { ...state }

  switch (action.type) {
    case c.ADD_1:
      newSate.number += 1
      newSate.error=``
      break
    case c.REM_1:
      newSate.number -= 1
      newSate.error=``
      break
    case c.SET_0:
      newSate.number = 0
      newSate.error=``
      break
    default:
  }

  return newSate
}
