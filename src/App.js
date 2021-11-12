import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Pages/Home/About/About";
import Home from "./Pages/Home/Home/Home";
import Services from "./Pages/Home/Services/Services";
import Navigation from "./Pages/Home/Shared/Navigation/Navigation";

function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
