import React, { Dispatch } from 'react'
import { Container } from '@material-ui/core'
import { connect } from 'react-redux'

class LoginContainer extends React.PureComponent {
  render() {
    return (
    <Container maxWidth='sm'>

    </Container>)
  }
}

// tslint:disable-next-line
const mapStateToProps = (state, ownProps) => { 

}

// tslint:disable-next-line
const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)