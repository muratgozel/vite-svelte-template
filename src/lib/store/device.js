import Bowser from "bowser";

const getUserAgentString = () => window.navigator.userAgent

const parsed = Bowser.parse( getUserAgentString() )

export const isMobile = () => {
  return parsed.platform.type == 'mobile'
}