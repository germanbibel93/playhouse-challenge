import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Upload from "./pages/Upload";
import UploadForm from "./pages/UploadForm";

const App: React.FC = () => {

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/upload">
            <UploadForm />
          </Route>
          <Route exact path="/uploads/:id">
            <Upload />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
