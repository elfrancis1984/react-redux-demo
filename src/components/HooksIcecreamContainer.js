import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIcecream } from '../redux'

function HooksIcecreamContainer() {
  const numOfIcecream = useSelector(state => state.icecream.numOfIcecream)
  const dispatch = useDispatch()
  return (
    <div>
        <h2>Number of iceCream - {numOfIcecream}</h2>
        <button onClick={() => dispatch(buyIcecream())}>Buy iceCream</button>
    </div>
  )
}

export default HooksIcecreamContainer
