import logo from './logo.svg';
import { useEffect,useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import UsersData from './Components/UsersData';
import Home from './Components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
const [loggedinuser,setLoggedinuser] = useState(null)
useEffect(()=>{
  const loggedin_user_data = localStorage.getItem("users_details");
  setLoggedinuser(JSON.parse(loggedin_user_data));
},[])


  return (
    <div>
      <BrowserRouter>
      <Routes>
    {loggedinuser ?  <Route path="/USERDETAILS" element={<UsersData />}/>: <Route path="/" element={<Signup />}/>}
        <Route path="/LOGIN" element={<Login />}/>
        <Route path="/USERDETAILS" element={<UsersData />}/>
       
      </Routes>
      </BrowserRouter>
    {/* <Login />
    <Signup />
    <UsersData />
    <Home /> */}
    </div>
  );
}

export default App;
