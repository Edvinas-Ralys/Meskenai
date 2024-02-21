import axios from "axios"
import React, { useEffect, useState, useSyncExternalStore } from "react"
import { SERVER_URL } from "../Components/Constants/main"

function useAuthorsDropdown() {
  const [authorsDropdown, setAuthorsDropdown] = useState(null)

  useEffect(
    _ => {
      axios
        .get(`${SERVER_URL}/authors`)
        .then(res => {
          setAuthorsDropdown(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    [setAuthorsDropdown]
  )

  return { authorsDropdown }
}

export default useAuthorsDropdown
