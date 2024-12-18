export function redirectFunction(base, endpoint) {
  if (endpoint != null) window.open(`${base}${endpoint}`, '_self');
}

export function msgError(msg) {
  console.error("Erro na requisição (request JS):", msg);
}

//token
export function isTokenExpired(token) {
  //console.log("tokenTime:", token?.exp);
  let tempo = Math.floor(new Date().getTime() / 1000);
  //console.log("tempo:", tempo);
  let value = tempo >= token?.exp;
  //console.log(value);
  return value;
}

export function deleteToken() {
  document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  //console.log("executei")
  return '';
}
//cookie
export function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function deserialize_cookie(cookie) {
  if (cookie != "")
    return JSON.parse(cookie)
  return [];
}

export function serialize_cookie(jsonCookie) {
  return JSON.stringify(jsonCookie);
}

export function checkCookie() {
  let username = getCookie("username");
  if (username != "") {
    alert("Welcome again " + username);
  } else {
    username = prompt("Please enter your name:", "");
    if (username != "" && username != null) {
      setCookie("username", username, 365);
    }
  }
}

export function cookieParser(cook) {
  let cookie = getCookie(cook);
  console.log("converso", cookie);
  cookie = cookie.split('.');
  return cookie;
}