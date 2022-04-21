import React from 'react';

import './Clock.scss';

export default class Clock extends React.Component {

    constructor() {
        super();
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        this.intervaTD = setInterval(() => {
            this.updateClock()
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervaTD)
    }

    updateClock() {
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }

    render() {

        return (
            <div className="clock">
                {this.state.time}
            </div>
        )
    }
}