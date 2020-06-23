import React from 'react'
import { Container, CssBaseline } from '@material-ui/core'
import { connect } from 'react-redux'
import HistoricalMapsComponent from 'root/components/historicalMaps/vietnam'
import TextRingAnimationLoading from 'root/components/commons/loadingAnimations/textRingAnimation'

interface HistoricalMapsProps {
  lang: any
}
interface HistoricalMapsState {
  loadingAnimation: Boolean
}

class HistoricalMapsContainer extends React.PureComponent<HistoricalMapsProps, HistoricalMapsState> {
  constructor(props: any) {
    super(props)
    this.state = { loadingAnimation: true }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loadingAnimation: false })
    }, 3000)
  }

  render() {
    if (this.state.loadingAnimation) return (<TextRingAnimationLoading />)
    return (
      <Container maxWidth='lg'>
        <CssBaseline />
        <HistoricalMapsComponent text={this.props.lang?.historicalMapsContainer} />
      </Container>)
  }
}

interface RootState { }

const mapStateToProps = (state: RootState) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(HistoricalMapsContainer)