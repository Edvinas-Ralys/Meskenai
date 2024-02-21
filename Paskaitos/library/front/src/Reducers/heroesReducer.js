import * as constants from "../Components/Constants/heroes"
export default function heroesReducer(state, action) {
  let newState = structuredClone(state ? state : [])
  let hero = null
  switch (action.type) {
    case constants.GET_HEROES_FROM_SERVER:
      newState = action.payload.map(hero => {
        hero.author = {}
        hero.book = {}
        hero.author.name = hero.authorName
        hero.author.surname = hero.authorSurname
        hero.book.title = hero.title
        delete hero.authorName
        delete hero.authorSurname
        delete hero.title
        return hero
      })
      break

    case constants.CREATE_HERO:
      newState.unshift({ ...action.payload, temp: true })
      break

    case constants.CREATE_HERO_REAL:
      hero = newState.find(hero => hero.id === action.payload.uuid)
      if (hero) {
        delete hero.temp
        hero.id = action.payload.id
      }
      break

    case constants.CREATE_HERO_UNDO:
      newState = newState.filter(b => b.id !== action.payload.id)
      break

    case constants.DELETE_HERO:
      hero = newState.find(hero => hero.id === action.payload.id)
      if (hero) {
        hero.deleted = true
      }
      break

    case constants.DELETE_HERO_UNDO:
      hero = newState.find(hero => hero.id === action.payload.id)
      if (hero) {
        delete hero.deleted
      }
      break
    case constants.DELETE_HERO_REAL:
      newState = newState.filter(hero => hero.id !== action.payload.id)
      break

    case constants.UPDATE_HERO:
      hero = newState.find(b => b.id === action.payload.id)
      if (hero) {
        hero = { ...action.payload, temp: true }
      }
      newState = newState.map(b => (b.id === hero.id ? hero : b))
      break

    case constants.UPDATE_HERO_REAL:
      hero = newState.find(b => b.id === action.payload.id)
      if (hero) {
        delete hero.temp
        delete hero.old
      }
      newState = newState.map(b => (b.id === hero.id ? hero : b))
      break

    case constants.UPDATE_HERO_UNDO:
      hero = newState.find(b => b.id === action.payload.id)
      if (hero) {
        hero = { ...hero.old }
      }
      newState = newState.map(b => (b.id === hero.id ? hero : b))
      break
    default:
  }
  console.log(newState)
  return newState
}
