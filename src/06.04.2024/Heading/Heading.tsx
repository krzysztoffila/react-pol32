import { Component } from "react";

interface HeadlineState {
  isVisible: boolean;
}

class Heading extends Component<{}, HeadlineState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isVisible: true
    }
  }
  toogleVisibility = () => {
    this.setState((prev) => ({
      isVisible: !prev.isVisible
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.toogleVisibility}> {this.state.isVisible ? 'Pokaz' : 'Ukryj'}</button>
        {(this.state.isVisible && <h1>Headline class Component</h1>)}
      </div>
    )
  }
}
export default Heading
