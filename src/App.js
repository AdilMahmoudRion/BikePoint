import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Pages/Home/About/About";
import Home from "./Pages/Home/Home/Home";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Services from "./Pages/Home/Services/Services";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import Login from "./Pages/Home/Login/Login/Login";
import Register from "./Pages/Home/Login/Register/Register";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation></Navigation>
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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
           <Register></Register>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
