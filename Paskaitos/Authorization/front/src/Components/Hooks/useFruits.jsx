import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { AFTER_LOGIN_URL, SERVER_URL } from "../Constants/main"
import { Auth } from "../../Context/Auth"
import { Router } from "../../Context/Router"

export default function useFruits() {
  const [fruits, setFruits] = useState(null)
  const [createFruit, setCreateFruit] = useState(null)
  const [editFruit, setEditFruit] = useState(null)
  const [deleteFruit, setDeleteFruit] = useState(null)

  const { user, logout } = useContext(Auth)
  const { show401Page } = useContext(Router)

  //*Create fruit
  useEffect(
    _ => {
      if (null !== createFruit) {
        let withTokenUrl = ``
        if (null !== user) {
          withTokenUrl = `${SERVER_URL}/fruits?token=${user.token}`
        } else {
          withTokenUrl = `${SERVER_URL}/fruits`
        }
        axios
          .post(withTokenUrl, createFruit)
          .then(res => {
            console.log(res)
            setCreateFruit(null)
            setFruits(f =>
              f.map(fruit =>
                fruit.id === res.data.uuid ? { ...fruit, id: res.data.id, temp: false } : fruit
              )
            )
          })
          .catch(err => {
            setFruits(fr => fr.filter(fruit => fruit.id !== createFruit.id))
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
    [createFruit]
  )

  //*Get fruit with authentication
  useEffect(_ => {
    let withTokenUrl = ``
    if (null !== user) {
      withTokenUrl = `${SERVER_URL}/fruits?token=${user.token}`
    } else {
      withTokenUrl = `${SERVER_URL}/fruits`
    }
    console.log(withTokenUrl)

    axios
      .get(withTokenUrl)
      .then(res => {
        setFruits(res.data)
        console.log(res.data)
      })
      .catch(err => {
        if (err.response) {
          if (err.response.status === 401 && err.response.data.status === `login`) {
            logout()
          } else {
            show401Page()
          }
        }
        console.log(err)
      })
  }, [])

  //*Edit fruit
  useEffect(
    _ => {
      if (null !== editFruit) {
        const withTokenUrl = user
          ? `${SERVER_URL}/fruits/${editFruit.id}?token=${user.token}`
          : `${SERVER_URL}/fruits/${editFruit.id}`
        axios
          .put(withTokenUrl, editFruit)
          .then(res => {
            console.log(res)
            setEditFruit(null)
            setFruits(f =>
              f.map(fruit => (fruit.id === res.data.id ? { ...fruit, temp: false } : fruit))
            )
          })
          .catch(err => {
            setFruits(fr =>
              fr.map(fruit =>
                fruit.id === editFruit.id ? { ...fruit.preEdit, temp: false } : fruit
              )
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
    [editFruit]
  )

  //*Delete fruit
  useEffect(
    _ => {
      if (null !== deleteFruit) {
        let withTokenUrl = ``
        if (null !== user) {
          withTokenUrl = `${SERVER_URL}/fruits/${deleteFruit}?token=${user.token}`
        } else {
          withTokenUrl = `${SERVER_URL}/fruits${deleteFruit}`
        }
        axios
          .delete(withTokenUrl)
          .then(res => {
            setDeleteFruit(null)
            setFruits(f => f.filter(fruit => fruit.id !== res.data.id))
          })
          .catch(err => {
            console.log(err)
            setDeleteFruit(null)
            setFruits(fr =>
              fr.map(fruit => (fruit.id === deleteFruit ? { ...fruit, temp: false } : fruit))
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
    [deleteFruit]
  )

  return {
    fruits,
    setFruits,
    createFruit,
    setCreateFruit,
    editFruit,
    setEditFruit,
    deleteFruit,
    setDeleteFruit,
  }
}
