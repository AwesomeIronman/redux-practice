import React, { Component } from "react";
import { connect } from 'react-redux'
import { buyCake, sellCake, reset, fetchCakes } from './redux/actions'

function mapStateToProps(state) {
  return {
    count: state.cake.cakeCount,
  };
}

const mapDispatchToProps = {  
  increment: buyCake,
  decrement: sellCake,
  reset,
  fetchCakes
};

class Cake extends Component {
  render() {
    const { count, increment, decrement, reset, fetchCakes } = this.props;
    return (
      <>
        <h2>Cake:</h2>
        <p className="text">Available: {count}</p>
        <div className="flex-container">
          <button onClick={increment}>Buy</button>
          <button onClick={decrement}>Sell</button>
          <button onClick={reset}>Reset</button>
          <button onClick={fetchCakes}>Fetch Cakes</button>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cake)