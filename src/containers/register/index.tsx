import React from 'react'
import { Container } from '@material-ui/core'
import { connect } from 'react-redux'
import SignupComponent from '../../components/signup'

interface RegisterProps {
  lang: any
}
interface RegisterState { }

class registerContainer extends React.PureComponent<RegisterProps, RegisterState> {
  render() {
    return (
      <Container maxWidth='xl'>
        <SignupComponent text={this.props.lang?.registerContainer} />
      </Container>)
  }
}

interface RootState {
  register: any
}

const mapStateToProps = (state: RootState) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(registerContainer)