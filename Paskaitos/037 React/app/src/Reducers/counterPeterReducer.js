
import * as c from "../Constants/counterConst"

export default function counterPeterReducer(state, action) {
  let newSate = { ...state }

  switch (action.type) {
    case c.ADDAMOUNT:
      newSate.number += action.payload
      newSate.error=``
      break
    case c.ERROR:
      newSate.error = action.payload
      break
    default:
  }

  return newSate
}
