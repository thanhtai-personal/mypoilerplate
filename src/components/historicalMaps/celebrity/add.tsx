import React from 'react'
import { connect } from 'react-redux'
import CheckOut from './patialComponents/createCelebrity'

const CreateCelebrity = (props: any) => {
  return (<>
    <CheckOut />
  </>)
}

const mapState = (rootState: any) => {
  return {}
}

const mapDispatch = {

}

export default connect(mapState, mapDispatch)(CreateCelebrity)