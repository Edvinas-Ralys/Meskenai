import axios from "axios"
import { SERVER_URL, AFTER_LOGIN_URL } from "../Constants/main"
import { useContext, useEffect, useState } from "react"
import { Auth } from "../../Context/Auth"


//*Submit username and password, return server response
export default function useLogin() {
  //*User inputs
  const [inputs, setInputs] = useState(null)
  //*Response from server
  const [response, setResponse] = useState(null)

  const {login} = useContext(Auth)

  //*Effect on input change to post information to server
  useEffect(
    _ => {
      if (null !== inputs) {
        axios
          .post(`${SERVER_URL}/login`, inputs)
          .then(res => {
            console.log(res.data)
            login(res.data.token, res.data.username, res.data.role)
            window.location.href = AFTER_LOGIN_URL
        })
          .catch(err => {
            console.log(err)
            //*Error when server is not reached
            if (!err.response) {
              setResponse({
                ok: false,
                status: 500,
                msg: `Server Error`,
              })
            } else {
              setResponse({
                ok: false,
                status: err.response.status,
                msg: err.response.data?.message || err.message,
              })
            }
          })
      }
    },
    [inputs]
  )

  //*set inputs and get response
  return [setInputs, response]
}
