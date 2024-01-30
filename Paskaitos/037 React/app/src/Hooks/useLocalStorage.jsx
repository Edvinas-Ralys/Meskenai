import { useEffect, useState } from "react"

export default function useLocalStorage(key, keyLt, initialValue) {

  const [value, setValue] = useState(_=>{
    const item = window.localStorage.getItem(key)
    return(item ? JSON.parse(item) : initialValue)
  })

  const [valueLt, setValueLt] = useState(_=>{
    const itemLt = window.localStorage.getItem(keyLt)
    return(itemLt ? JSON.parse(itemLt) : initialValue)
  })

  // useEffect(
  //   _ => {
  //     const item = window.localStorage.getItem(key)
  //     const itemLt = window.localStorage.getItem(keyLt)
  //     setValue(item ? JSON.parse(item) : initialValue)
  //     setValueLt(itemLt ? JSON.parse(itemLt) : initialValue)
  //   },
  //   [key, keyLt, initialValue]
  // )

  useEffect(
    _ => {
      window.localStorage.setItem(key, JSON.stringify(value))
      window.localStorage.setItem(keyLt, JSON.parse(valueLt))
    },
    [value, key, valueLt, keyLt]
  )

  return [value, setValue, valueLt, setValueLt]
}
