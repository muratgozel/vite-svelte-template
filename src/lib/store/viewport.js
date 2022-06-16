import { readable } from "svelte/store";
import { debounce } from "underscore";

const getViewportSize = () => {
  return {
    clientWidth: document.documentElement.clientWidth,
    clientHeight: document.documentElement.clientHeight,
    width: window.innerWidth,
    height: window.innerHeight
  }
}

export const viewport = readable(getViewportSize(), set => {
  set( getViewportSize() )

  window.onresize = debounce(function() {
    return set( getViewportSize() )
  }, 300)

  return () => {window.onresize = null}
})
