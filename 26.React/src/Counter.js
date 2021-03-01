import { Component } from 'react';

class Counter extends Component {

  constructor(props) {
    super(props);

    this.state = { count: props.count }
    this.add = this.add.bind(this);
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidMount() {
    const storageState = JSON.parse(localStorage.getItem('state'));
    this.setState(storageState);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  add() {
    // Errado
    // this.setState({ count: this.state.count + 1 })/

    this.setState((state) => {
      return { count: state.count + 1 }
    }, () => {
      console.log('Após o update', this.state);
      localStorage.setItem('state', JSON.stringify(this.state));
    });
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
      </div>
    )
  }

}

export default Counter;