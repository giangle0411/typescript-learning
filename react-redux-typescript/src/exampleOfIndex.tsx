import React, { Component } from 'react'
import ReactDOM from 'react-dom'

interface AppProps {
  color?: string
}

// const App = (props: AppProps): JSX.Element => {
//   return <div>{props.color}</div>
// }

class App extends Component<AppProps> {
  state = { counter: 0 }

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 })
  }
  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 })
  }

  render() {
    return (
      <div>
        <h2>Hi there!</h2>
        <div>{this.props.color}</div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        <h3>{this.state.counter}</h3>
      </div>
    )
  }
}

ReactDOM.render(<App color="red" />, document.querySelector('#root'))
