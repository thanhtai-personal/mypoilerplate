import React from 'react'
// import { Container } from '@material-ui/core'
import { connect } from 'react-redux'
import CVComponent from 'root/components/cv'

interface CVProps {
  lang: any
}
interface CVState { }

class CVContainer extends React.PureComponent<CVProps, CVState> {
  render() {
    return (
      <CVComponent text={this.props.lang?.CVContainer} />
    )
  }
}

interface RootState {}

const mapStateToProps = (state: RootState) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CVContainer)