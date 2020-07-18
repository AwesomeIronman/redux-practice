import React, { Component } from "react"
import "./App.css"
import IceCream from "./modules/IceCream/IceCream"
import Cake from "./modules/Cake/Cake";

export default class App extends Component {
    render() {
        return (
            <>
                <header>
                    <h2>Redux Shop</h2>
                </header>
                <IceCream />
                <Cake />
            </>
        )
    }
}