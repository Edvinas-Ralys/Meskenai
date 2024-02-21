import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { AFTER_LOGIN_URL, SERVER_URL } from "../Constants/main"
import { Auth } from "../../Context/Auth"
import { Router } from "../../Context/Router"

export default function useUsers() {
  const [users, setUsers] = useState(null)
  const [createUser, setCreateUser] = useState(null)
  const [editUser, setEditUser] = useState(null)
  const [deleteUser, setDeleteUser] = useState(null)

  const { user, logout } = useContext(Auth)
  const { show401Page } = useContext(Router)

  //*Create user
  useEffect(
    _ => {
      if (null !== createUser) {
        axios
          .post(`${SERVER_URL}/users`, createUser)
          .then(_ => {
            setCreateUser(null)
            window.location.href = `#login`
          })
          .catch(_ => {
            setCreateUser(null)
          })
      }
    },
    [createUser]
  )

  //*Get user with authentication
  useEffect(_ => {
    if (null === user) {
      return
    }
    let withTokenUrl = ``
    if (null !== user) {
      withTokenUrl = `${SERVER_URL}/users?token=${user.token}`
    } else {
      withTokenUrl = `${SERVER_URL}/users`
    }
    axios
      .get(`${SERVER_URL}/users`)
      .then(res => {
        setUsers(res.data)
        console.log(res.data)
      })
      .catch(err => {
        if (err.response) {
          if (err.response.status === 401) {
            if (err.response.data.status === `login`) {
              logout()
            }
            show401Page()
          }
        }
        setUsers({error:true})
        console.log(err)
      })
  }, [])

  //*Edit user
  useEffect(
    _ => {
      if (null !== editUser) {
        const withTokenUrl = user
          ? `${SERVER_URL}/users/${editUser.id}?token=${user.token}`
          : `${SERVER_URL}/users/${editUser.id}`
        axios
          .put(withTokenUrl, editUser)
          .then(res => {
            console.log(res)
            setEditUser(null)
            setUsers(f =>
              f.map(user => (user.id === res.data.id ? { ...user, temp: false } : user))
            )
          })
          .catch(err => {
            setUsers(fr =>
              fr.map(user => (user.id === editUser.id ? { ...user.preEdit, temp: false } : user))
            )
            if (err.response) {
              if (err.response.status === 401) {
                if (err.response.data.satus === `login`) {
                  logout()
                }
                show401Page()
              }
            }
          })
      }
    },
    [editUser]
  )

  //*Delete user
  useEffect(
    _ => {
      if (null !== deleteUser) {
        let withTokenUrl = ``
        if (null !== user) {
          withTokenUrl = `${SERVER_URL}/users/${deleteUser}?token=${user.token}`
        } else {
          withTokenUrl = `${SERVER_URL}/users${deleteUser}`
        }
        axios
          .delete(withTokenUrl)
          .then(res => {
            setDeleteUser(null)
            setUsers(f => f.filter(user => user.id !== res.data.id))
          })
          .catch(err => {
            console.log(err)
            setDeleteUser(null)
            setUsers(fr =>
              fr.map(user => (user.id === deleteUser ? { ...user, temp: false } : user))
            )
            if (err.response) {
              if (err.response.status === 401) {
                if (err.response.data.satus === `login`) {
                  logout()
                }
                show401Page()
              }
            }
          })
      }
    },
    [deleteUser]
  )

  return {
    users,
    setUsers,
    createUser,
    setCreateUser,
    editUser,
    setEditUser,
    deleteUser,
    setDeleteUser,
  }
}
