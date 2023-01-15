// import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    // Link,
    // useRouteMatch,
    // useParams
} from "react-router-dom";

import { Home } from "./pages/home";

import { Login } from "./pages/login";


function App() {
    return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="login" element={<Login />}/>
          </Routes>
      </Router>
    );
}

export default App;

// <Route index element={<Home1 />}/>