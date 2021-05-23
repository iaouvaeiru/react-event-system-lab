import React, { Component } from 'react'

export default class Keypad extends Component {
    logPassword = () => {
        console.log('Entering password...')
    }
    render() {
        return (
            <div>
                <input type="password" onKeyUp={this.logPassword}></input>
            </div>
        )
    }
}
