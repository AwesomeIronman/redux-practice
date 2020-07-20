import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buyIceCream, sellIceCream, reset, iceCreamLoaded } from './redux/actions'

function mapStateToProps(state) {
  return {
    count: state.iceCream.iceCreamCount,
  };
}

const mapDispatchToProps = {
  increment: buyIceCream,
  decrement: sellIceCream,
  reset,
  iceCreamLoaded
}

class IceCream extends Component {
  render() {
    const { count, increment, decrement, reset, iceCreamLoaded } = this.props
    return (
      <>
        <h2>Ice Cream:</h2>
        <p className="text">Available: {count}</p>
        <div className="flex-container">
          <button onClick={increment}>Buy</button>
          <button onClick={decrement}>Sell</button>
          <button onClick={reset}>Reset</button>
          <button onClick={iceCreamLoaded}>Fetch Ice Creams!</button>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCream)