import React from 'react'
import { Container } from '@material-ui/core'
import { connect } from 'react-redux'
import LoginComponent from '../../components/login'
import { updateLoginData } from '../../actions/login'
import { login } from '../../actions/auth'

interface LoginProps {
  userName: String,
  password: String,
  updateLoginData: any,
  lang: any,
  login: any
}

class LoginContainer extends React.PureComponent<LoginProps> {
  render() {
    const { props: { userName, password,
      updateLoginData,
      lang,
      login
    } } = this
    return (
      <Container maxWidth='xl'>
        <LoginComponent
          userName={userName}
          password={password}
          updateLoginData={updateLoginData}
          text={lang.loginContainer}
          login={login}
        />
      </Container>)
  }
}

const mapStateToProps = (state: any) => {
  return {
    userName: state?.login?.userName,
    password: state?.login?.password
  }
}

const mapDispatchToProps = (() => ({
  updateLoginData,
  login
}))()

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)