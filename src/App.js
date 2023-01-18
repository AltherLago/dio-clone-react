import {
    BrowserRouter as Router,
    Routes,
    Route,
    // Link,
    // Quando criou um link por algum motivo voltou a funcionar...
    // useRouteMatch,
    // useParams
} from "react-router-dom";

import {Home} from "./pages/home";

import {Login} from "./pages/login";


function App() {
    return (
      <Router>
          <Routes>
              <Route path="dio-clone-react/" element={<Home />} />
              <Route path="dio-clone-react/login" element={<Login />} />
          </Routes>
      </Router>
    );
}

export default App;

// <Route index element={<Home1 />}/>

