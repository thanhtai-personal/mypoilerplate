
const login = (data) => ({
  method: 'post',
  url: 'auth/login',
  data: data
})

export default {
  login
}