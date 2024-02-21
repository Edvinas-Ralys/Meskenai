import { useContext, useEffect, useState } from "react"
import useLogin from "../../Hooks/useLogin"
import { Auth } from "../../../Context/Auth"
import { AFTER_LOGIN_URL } from "../../Constants/main"

function Login() {
  const [username, setUsername] = useState(``)
  const [password, setPassword] = useState(``)
  const [setInputs, response] = useLogin()
  const { user } = useContext(Auth)

  //*Sets inputs and triggers effect in useLogin hook
  const handleInputs = _ => {
    setInputs({ username, password })
    setPassword(``)
  }

  useEffect(
    _ => {
      if (user) {
        window.location.href = AFTER_LOGIN_URL
      }
    },
    [user]
  )

  if (!user) {
    return (
      <>
        <a href="#home">Home</a>
        <div className="login-page">
          <div className="box">
            <h1>Login</h1>
            <div className="response">
              {response !== null && !response.ok && <p>{response.msg}</p>}
            </div>
            <div className="form">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <button className="green" onClick={handleInputs}>
                Log In
              </button>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return null
  }
}

export default Login
