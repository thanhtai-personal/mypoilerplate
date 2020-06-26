import React from 'react'
import { Container, CssBaseline } from '@material-ui/core'
import { connect } from 'react-redux'
import TextRingAnimationLoading from 'root/components/commons/loadingAnimations/textRingAnimation'
import AddCelebrityComponent from 'root/components/historicalMaps/celebrity/add'

interface AddCelebrityProps {
  lang: any
}
interface AddCelebrityState {
  loadingAnimation: Boolean
}

class AddCelebrityContainer extends React.PureComponent<AddCelebrityProps, AddCelebrityState> {
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
        <AddCelebrityComponent text={this.props.lang?.historicalMapsContainer} />
      </Container>)
  }
}

interface RootState { }

const mapStateToProps = (state: RootState) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AddCelebrityContainer)