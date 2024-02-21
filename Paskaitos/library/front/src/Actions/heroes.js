import * as constants from "../Components/Constants/heroes.js"

export function getHeroes(heroes) {
  return {
    type: constants.GET_HEROES_FROM_SERVER,
    payload: heroes,
  }
}

export function storeHeroAsTemp(heroes) {
  return {
    type: constants.CREATE_HERO,
    payload: heroes,
  }
}

export function storeHeroAsReal(response) {
  return {
    type: constants.CREATE_HERO_REAL,
    payload: response,
  }
}

export function storeHeroUndo(hero) {
  return {
    type: constants.CREATE_HERO_UNDO,
    payload: hero,
  }
}

export function deleteHeroAsTemp(hero) {
  return {
    type: constants.DELETE_HERO,
    payload: hero,
  }
}

export function deleteHeroUndo(hero) {
  return {
    type: constants.DELETE_HERO_UNDO,
    payload: hero,
  }
}

export function deleteHeroAsReal(response) {
  return {
    type: constants.DELETE_HERO_REAL,
    payload: response,
  }
}

export function updateHeroTemp(hero) {
  console.log(hero)
  return {
    type: constants.UPDATE_HERO,
    payload: hero,
  }
}

export function updateHeroReal(response) {
  return {
    type: constants.UPDATE_HERO_REAL,
    payload: response,
  }
}

export function updateHeroUndo(hero) {
  return {
    type: constants.UPDATE_HERO_UNDO,
    payload: hero,
  }
}
