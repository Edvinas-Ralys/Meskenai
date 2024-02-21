import { useContext } from "react";
import { Auth } from "../../../Context/Auth";
import { Router } from "../../../Context/Router";

export default function Gate({ children, roles }) {
  const { user,  } = useContext(Auth)
  const {show401Page} = useContext(Router)
  const hasRole = _ => {
    const rolesArr = roles.split(`|`)
    return user && rolesArr.includes(user.role)
  }
  return <>{hasRole() ? children : show401Page()}</>
}
