import { Component } from "react";

interface TimerState {
  minutes: number,
  seconds: number,
  hours: number
  // isRunning: boolean
}

class Timer extends Component<{}, TimerState> {
  timerId?: NodeJS.Timeout
  constructor(props: any) {
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0
      // isRunning: false,
    }
  }
  increment = () => {
    this.setState((prev) => ({
      seconds: prev.seconds + 1
    }))
  }
  startTimer = () => {
    this.timerId = setInterval(() => {
      // this.isRunning = true
      this.increment()
    }, 1000);
  }
  stopTimer = () => {
    clearInterval(this.timerId)
  }
  resetTimer = () => {
    this.setState(() => ({
      seconds: 0,
      minutes: 0,
      hours: 0,
    }))
  }
  componentDidMount(): void {
  }
  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<TimerState>, snapshot?: any): void {

  }
  componentWillUnmount(): void {

  }
  render() {
    return (
      <div>
        <h2>{this.state.hours}:{this.state.minutes}:{this.state.seconds}</h2>
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.stopTimer}>Stop</button>
        <button onClick={this.resetTimer}>Reset</button>
      </div >
    )
  }
}
export default Timer
