import React from 'react'
import { Container } from '@material-ui/core'
import { connect } from 'react-redux'
import VietMapComponent from '../../components/vietMap'

interface VietMapProps {
  lang: any
}
interface VietMapState { }

class VietMapContainer extends React.PureComponent<VietMapProps, VietMapState> {
  render() {
    return (
      <Container maxWidth='xl'>
        <VietMapComponent text={this.props.lang?.vietMapContainer} />
      </Container>)
  }
}

interface RootState {}

const mapStateToProps = (state: RootState) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(VietMapContainer)