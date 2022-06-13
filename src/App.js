import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage.js";
import Upload from "./pages/Upload/Upload";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route path="/upload" component={Upload} />

          <Route path="/:id" component={HomePage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
