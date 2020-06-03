import React from 'react'
import { Container } from '@material-ui/core'
import { connect } from 'react-redux'
import SignupComponent from '../../components/signup'
import { updateRegisterData } from '../../actions/register'
import { register } from '../../actions/auth'

interface RegisterProps {
  userName: String,
  password: String,
  updateRegisterData: any,
  lang: any,
  register: any,
  firstName: String,
  lastName: String
}

class registerContainer extends React.PureComponent<RegisterProps> {
  render() {
    const { props: {
      userName, password, firstName, lastName,
      updateRegisterData,
      lang,
      register
    } } = this
    return (
      <Container maxWidth='xl'>
        <SignupComponent
          firstName={firstName}
          lastName={lastName}
          userName={userName}
          password={password}
          updateRegisterData={updateRegisterData}
          text={lang.registerContainer}
          register={register}
        />
      </Container>)
  }
}

const mapStateToProps = (state: any) => {
  return {
    userName: state?.register?.userName,
    password: state?.register?.password,
    firstName: state?.register?.firstName,
    lastName: state?.register?.lastName
  }
}

const mapDispatchToProps = (() => ({
  updateRegisterData,
  register
}))()

export default connect(mapStateToProps, mapDispatchToProps)(registerContainer)