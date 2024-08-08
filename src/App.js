import { Outlet, useNavigate, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";


function App() {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function handleLogin() {
    setIsLoggedIn(true)
  }

  function handleLogOut() {
    setIsLoggedIn(false)
  }

  useEffect(() => {
    if(isLoggedIn) {
      navigate("/")
    } else {
      navigate("/login")
    }
  }, [isLoggedIn])

  return (
    <div className="app">
      {/* Add conditional rendering so users have to be logged in to see pages on the site */}
      {isLoggedIn ? <NavBar logout={handleLogOut}  /> : <Navigate to="/login" />}
      <Outlet context={handleLogin}/>
    </div>
  );
}

export default App;
