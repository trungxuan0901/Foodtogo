import './App.css';
import Header from './Component/Headers/Header';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Login from './Component/Login/Login'
import Home from './Component/Home/Home'
import CheckOut from './Component/Checkout/CheckOut'
import Foodter from './Component/Footer/Footer'
import Navlink from './Component/Navlink/Navlink'
import {auth} from './Component/firebase'
import { useEffect } from 'react';
import { useStateValue } from './Component/StateProvider';

function App() {
   const [{loggedinuser}, dispatch] = useStateValue()
  
   useEffect(()=> {
     const unsubsribe = auth.onAuthStateChanged((userauth)=> {
      if(userauth){
        dispatch({
          type:'SET_LOGIN',
          user: userauth
        })

      } else{
        dispatch({
          type:'SET_LOGIN',
          user: null
        })
      }
     })
     return () =>{
       unsubsribe();
     }

   }, [])
   console.log("user>>", loggedinuser)
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
          <Header/>
          <CheckOut/>
          </Route>
          <Route path="/login">
          <Login/>
          </Route>
          <Route path="/">
            <Header/>
            <Navlink/>
            <Home/>
            <Foodter/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
