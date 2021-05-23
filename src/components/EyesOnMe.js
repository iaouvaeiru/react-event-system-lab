import React, { Component } from 'react'

export default class EyesOnMe extends Component {
    logFocus = () => {
        console.log('Good!')
    }

    logBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <div>
                <button onFocus={this.logFocus} onBlur={this.logBlur}>button</button>
            </div>
        )
    }
}
