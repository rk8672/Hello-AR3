// src/App.js

import { useAuth } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';

import SongList from './components/SongList';
//import Navbar from './components/Navbar/Navbar'
import NavigationBar from "./components/Navbar/Nav"

const App = () => {
  const { user, login,  } = useAuth();

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {user ? (
          <>
            <NavigationBar /> 
          
              <div style={{ flex: 1, paddingLeft: '10px',}}>
              <Routes>
              <Route path="/SongList" element={<SongList />} />
             
           
             
            </Routes>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Login login={login}  />} />
       
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;