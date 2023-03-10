import React from 'react'
import { connect } from'react-redux'
import { buyIcecream } from '../redux'

function IcecreamContainer(props) {
  return (
    <div>
        <h2>Number of icecream - {props.numOfIcecream}</h2>
        <button onClick={props.buyIcecream}>Buy icecream</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
      numOfIcecream: state.icecream.numOfIcecream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIcecream: () => dispatch(buyIcecream())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(IcecreamContainer)
