import * as c from "../Constants/counterConst"

export function add1() {
  return {
    type: c.ADD_1,
  }
}
export function rem1() {
  return {
    type: c.REM_1,
  }
}

export function set0() {
  return {
    type: c.SET_0,
  }
}

export function add(num){
    return{
        type:c.ADDAMOUNT,
        payload:num
    }
}

export function error(text) {
    return {
      type: c.ERROR,
      payload: text
    }
  }




