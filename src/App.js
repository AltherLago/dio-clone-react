import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import {GlobalStyle} from "./styles/global";

import {Home} from "./pages/home";
import {Login} from "./pages/login";


function App() {
    return (
      <Router>
          <GlobalStyle/>
          <Routes>
              <Route path="dio-clone-react/" element={<Home />} />
              <Route path="dio-clone-react/login" element={<Login />} />
          </Routes>
      </Router>
    );
}

export default App;


