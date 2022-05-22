export default function authHeader() {
  const obj = JSON.parse(localStorage.getItem("authUser"))

  if (obj && obj.token) {
    return { Authorization: obj.token }
  } else {
    return {}
  }
}
