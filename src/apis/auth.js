
const verifyToken = () => ({
  method: 'post',
  url: 'verify-token'
})

const login = (data) => ({
  method: 'post',
  url: 'login',
  data: data
})

export default {
  verifyToken,
  login
}