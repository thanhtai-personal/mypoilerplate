import React from 'react'
import { Container, CssBaseline } from '@material-ui/core'
import { connect } from 'react-redux'
import HistoricalMapsComponent from 'root/components/historicalMaps/vietnam'

interface HistoricalMapsProps {
  lang: any
}
interface HistoricalMapsState { }

class HistoricalMapsContainer extends React.PureComponent<HistoricalMapsProps, HistoricalMapsState> {
  render() {
    return (
      <Container maxWidth='lg'>
        <CssBaseline />
        <HistoricalMapsComponent text={this.props.lang?.historicalMapsContainer} />
      </Container>)
  }
}

interface RootState {}

const mapStateToProps = (state: RootState) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(HistoricalMapsContainer)