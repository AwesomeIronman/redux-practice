import React, { Component } from 'react'

export default class IceCream extends Component {
  render() {
    return (
      <>
        <h2>Ice Cream:</h2>
        <p className="text">Available: 0</p>
        <div class="flex-container">
          <button>Buy</button>
          <button>Sell</button>
          <button>Reset</button>
        </div>
      </>
    );
  }
}
