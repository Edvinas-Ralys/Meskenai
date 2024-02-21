import { useContext } from "react";
import { Auth } from "../../../Context/Auth";

export default function Gate({ children, roles }) {
  const { user } = useContext(Auth)
  const hasRole = _ => {
    const rolesArr = roles.split(`|`)
    return user && rolesArr.includes(user.role)
  }
  return <>{hasRole() && children}</>
}
