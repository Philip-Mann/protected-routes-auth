import './App.css';
import Main from './sectioning/main';
import { useState } from 'react';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
    console.log("logged in user:" + isAuthenticated);
  }

  const logout = () => {
    setIsAuthenticated(false);
    console.log("logged out user:" + isAuthenticated);
  }



  return (
    <div className="App">
      <Main 
        auth={isAuthenticated}
      />
      <div className="login">
        <button
          onClick={login}
        >Log In</button>
      </div>
      <div className="logout">
        <button
          onClick={logout}
        >Log Out</button>
      </div>
    </div>
  );
}

export default App;