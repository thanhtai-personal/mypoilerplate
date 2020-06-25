import React from 'react'
import { Container, CssBaseline } from '@material-ui/core'
import { connect } from 'react-redux'
import TextRingAnimationLoading from 'root/components/commons/loadingAnimations/textRingAnimation'
import HistorycalDashboardComponent from 'root/components/historicalMaps/dashboard'

interface HistorycalDashboardProps {
  lang: any
}
interface HistorycalDashboardState {
  loadingAnimation: Boolean
}

class HistorycalDashboardContainer extends React.PureComponent<HistorycalDashboardProps, HistorycalDashboardState> {
  constructor(props: any) {
    super(props)
    this.state = { loadingAnimation: true }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loadingAnimation: false })
    }, 1000)
  }

  render() {
    if (this.state.loadingAnimation) return (<TextRingAnimationLoading />)
    return (
      <Container maxWidth='lg'>
        <CssBaseline />
        <HistorycalDashboardComponent text={this.props.lang?.historicalMapsContainer} />
      </Container>)
  }
}

interface RootState { }

const mapStateToProps = (state: RootState) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(HistorycalDashboardContainer)