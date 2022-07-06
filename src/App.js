import "./App.css";
import { Counter } from "./components/Counter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// this will be the main class where we will be passing the list of components
function App() {
  return (
    <div className="App">
      <h1>don't fear failure be terrified of regrets!!!!!!</h1>

      <Router>
        <Switch>
          <Route path="/counter">
            <Counter />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
