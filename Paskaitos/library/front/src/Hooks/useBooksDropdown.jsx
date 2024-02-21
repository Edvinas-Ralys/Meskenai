import axios from "axios"
import { useEffect, useState, } from "react"
import { SERVER_URL } from "../Components/Constants/main"

function useBooksDropdown() {
  const [booksDropdown, setBooksDropdown] = useState(null)

  useEffect(
    _ => {
      axios
        .get(`${SERVER_URL}/books`)
        .then(res => {
          setBooksDropdown(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    [setBooksDropdown]
  )

  return { booksDropdown }
}

export default useBooksDropdown
