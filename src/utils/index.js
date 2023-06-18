export const getCookie = (cookieName) => {
  let name = cookieName + "="
  let decodedCookie = decodeURIComponent(document.cookie)
  let ca = decodedCookie.split(';')

  for(let i = 0; i <ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }

  return ""
}

import Cookies from "universal-cookie";
import jwt from "jwt-decode";

const cookies = new Cookies();

export const checkAuth = () => {
  let authenticated = false;

  try {
    const token = cookies.get("auth");

    if(token) {
      const {id} = jwt(token);
      authenticated = true;
      
      return {
        user_id: id,
        authenticated,
        token
      }
    }
  } catch (error) {
        console.log(error);
  }

  return {
    user_id: null,
    authenticated,
    token: null
  }

}