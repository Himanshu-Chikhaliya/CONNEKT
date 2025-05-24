import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import "./Homecss.css";
const Home = ({history}) => {

const nav = useNavigate();
 useEffect(()=>{
    if(localStorage.getItem("userInfo1"))
    {
         nav('/s')
    }
  },[history])

  return (
    <div class="main-bgcolor">
    {/* <div class="jumbotron centered align-items-center">
    <div class="container  ">
    <h1 class="display-3 mt-3 mb-3">Piqosocial</h1>
    <a class="btn btn-light btn-lg mr-2" href="/register" role="button">Register</a>
    <a class="btn btn-dark btn-lg" href="/login" role="button">Login</a>
  </div>
  </div> */}
  {/* <div class="d-flex justify-content-center align-items-center vh-100">
  <div class="text-center insta-wrapper">
    <h1 class="display-3 mt-3 mb-4 text-white">Piqosocial</h1>
    <a class="btn insta-gradient-btn me-3" href="/register" role="button">Register</a>
    <a class="btn insta-gradient-btn" href="/login" role="button">Login</a>
  </div>
</div> */}


<div className="d-flex justify-content-center align-items-center vh-100">
  <div className="text-center insta-wrapper">
    <img src="/images/Connekt.png" alt="Connekt Logo" className="mb-4 logo-imghome" />

    <div className="d-flex justify-content-center gap-3 flex-wrap">
      <a className="btn btn-orangehome" href="/register" role="button">Register</a>
      <a className="btn btn-bluehome" href="/login" role="button">Login</a>
    </div>
  </div>
</div>





</div>
  )
}
export default Home;