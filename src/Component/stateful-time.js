import React, { Component } from 'react'
import DynamicReact from './dynamic-react'



export default class StatefulTime extends Component {

    state = {
        time: 0,
        interval: null
    }

    /************************ Function Start/Stop *************************************/

    start = () => {
        if (this.state.interval)
        {
            clearInterval(this.state.interval)
            this.setState({
                interval: null
            })
        }
        
        else {
             const interval = setInterval(
                () => {
                        this.setState({
                            time: this.state.time + 1000,
                        })
                }, 1000
                )
                this.setState({interval})
        }
    }

    /************************ Function Reset *************************************/

    reset = () => {
        clearInterval(this.state.interval)
            this.setState({
                time:0, 
                interval: null
            })

    }

    /************************ Render *************************************/

    render() {
        return (
            <div>
                <DynamicReact x={this.state.time} />
                <button className="timer-button" type="submit" onClick={this.start}>{this.state.interval ? "Stop" : "Start"}</button>
                <button className="timer-button" type="reset" onClick={this.reset}>Reset</button>
            </div>
        )
    }
}
