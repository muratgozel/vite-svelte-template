import { writable } from "svelte/store";
import produce from "immer";
import store from 'store/dist/store.modern'
import { sortBy } from "underscore";

const getUrlSearchParam = (name, url=window.location.href) => {
  name = name.replace(/[\[\]]/g, '\\$&')
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
  const results = regex.exec(url)
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

export const authenticate = async () => {
  const newToken = getUrlSearchParam('token')
  const storedToken = store.get('token')
  const token = newToken || storedToken
  const resp = await fetch(import.meta.env.VITE_BACKEND_URL + '/session', {
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
  if (resp.status < 200 || resp.status > 299) {
    return {error: new Error('Server responded with ' + resp.status)}
  }

  try {
    const json = await resp.json()

    if (json.revoked) {
      store.remove('token')
      return {error: new Error('Revoked')}
    }

    if (newToken) {
      window.history.replaceState({}, document.title, '/')
    }

    store.set('token', token)

    return json  
  } catch (error) {
    return {error}
  }
}

const createAuthStore = () => {
  const initialState = {
    fetching: true,
    data: {
      method: {},
      user: {}  
    }
  }
  const {subscribe, update, set} = writable(initialState)

  set(initialState)

  authenticate().then(obj => obj.error 
    ? set({error: obj, fetching: false}) 
    : set({data: obj, fetching: false})
  )

  return {
    subscribe,
    set
  }
}

export const auth = createAuthStore()