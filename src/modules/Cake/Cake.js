import React, { Component } from "react";
import { connect } from 'react-redux'
import { buyCake, sellCake, reset } from './redux/actions'

function mapStateToProps(state) {
  return {
    count: state.cake.cakeCount,
  };
}

const mapDispatchToProps = {  
  increment: buyCake,
  decrement: sellCake,
  reset,
};

class Cake extends Component {
  render() {
    const { count, increment, decrement, reset } = this.props;
    return (
      <>
        <h2>Cake:</h2>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cake)