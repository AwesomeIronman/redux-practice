import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buyIceCream, sellIceCream, reset } from './redux/actions'

function mapStateToProps(state) {
  return {
    count: state.iceCream.iceCreamCount,
  };
}

const mapDispatchToProps = {
  increment: buyIceCream,
  decrement: sellIceCream,
  reset
}

class IceCream extends Component {
  render() {
    const { count, increment, decrement, reset } = this.props
    return (
      <>
        <h2>Ice Cream:</h2>
        <p className="text">Available: {count}</p>
        <div className="flex-container">
          <button onClick={increment}>Buy</button>
          <button onClick={decrement}>Sell</button>
          <button onClick={reset}>Reset</button>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCream)