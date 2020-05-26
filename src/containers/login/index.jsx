import React from 'react'
import { Container } from '@material-ui/core'
import { connect } from 'react-redux'
import LoginComponent from '../../components/login'
import { UPDATE_USER_NAME, UPDATE_PASSWORD } from '../../constants/actionTypes'

class LoginContainer extends React.PureComponent {
  render() {
    const { props: { userName, password,
      updateUserName,
      updatePassword
    } } = this
    return (
      <Container maxWidth='xl'>
        <LoginComponent
          userName={userName}
          password={password}
          updateUserName={updateUserName}
          updatePassword={updatePassword}
        />
      </Container>)
  }
}

const mapStateToProps = ({ login = {} }, ownProps) => {
  return {
    userName: login.userName,
    password: login.password
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateUserName: () => dispatch({ type: UPDATE_USER_NAME }),
  updatePassword: () => dispatch({ type: UPDATE_PASSWORD })
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)