import { Link } from "react-router-dom"

import {Header} from "../../components/Header"

const Home = () => {
  return(
        <>
            <Header/>
            <h1>Home</h1>
            <Link to="/dio-clone-react/login">Do Login</Link>
        </>
        
  )
}

export {Home}


