import './lib/style/normalize.css'
import './lib/style/global.css'
import { regionist } from 'regionist'
import { addMessages, init, locale } from 'svelte-i18n'
import { enableES5 } from 'immer'
import en from './translations/en.json'
import App from './App.svelte'

enableES5()

const region = regionist.guess()
addMessages('en', en)
locale.set(region.locale.replace('_', '-').toLowerCase())
init({
  fallbackLocale: 'en',
  initialLocale: region.locale.replace('_', '-').toLowerCase()
})

const app = new App({
  target: document.getElementById('app'),
  // TODO: implement SSR. Otherwise hydrate should be false always.
  hydrate: false, //import.meta.env.DEV ? false : true,
  props: {}
})

export default app
