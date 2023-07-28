import logo from './logo.svg';
import './App.css';
//react-router
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Write from './Write';
import Single from './Single';
import Login from './Login';
import Home from './Home';
import Register from './Register';


import Footer from './components/Footer';
import Header from './components/Header';
import "./styles.scss"

const Layout = () => {
  return(
    <>
    <Header/>
    
    <Outlet/>

    <Footer/>

    </>

  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/home",
        element: <Home/>

      }, 
      {
        path:'/single',
        element: <Single/>

      },
      {
        path:'/login',
        element: <Login/>

      },
      {
        path:'/register',
        element: <Register/>

      },
      {
        path:"/write",
        element: <Write />
      }
    ]
   
  },
 

]);


function App() {
  return (
    <div className="app">
    <div className="container">
    <RouterProvider router={router}/>
    </div>
    </div>
  );
}


export default App;
