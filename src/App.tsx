import { Component } from "react";
import "./App.scss";
import Heading from "./06.04.2024/Heading/Heading";

interface AppState {
  isVisible: boolean;
}

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Heading />
      </div>
    );
  }
}

export default App;
