import React ,{useState,useEffect}from 'react'
import {toast} from 'react-toastify';
import { useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { Link } from 'react-router-dom';
import "./Register.css"
const Register = ({history}) => {
let [loading, setLoading] = useState(false);
let [color, setColor] = useState("#000000");

const nav = useNavigate();

 useEffect(()=>{
    if(localStorage.getItem("userInfo1"))
    {
         nav('/s')
    }
  },[history])
  const [data,setData] = useState({})

  function handleChange(event)
  {
       const {name,value} = event.target;

       setData((pre)=>{
         return {
         ...pre,
         [name]:value,

         }
       })

  }

  async function handleClick(event){
    //console.log(data);
    event.preventDefault();
    setLoading(true)

    const newDate = data;
    if (!data.name || !data.password|| !data.email ||!data.password2) {
      toast.warning('Please Fill all the Feilds',{position: toast.POSITION.TOP_LEFT})
          setLoading(false)
      return;
    }
    console.log(newDate)

   const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
        
    };
    
    const response = await fetch('http://localhost:4000/api/users/register', requestOptions)
    const Data = await response.json();

    if(!Data.error){
    toast.success('Successful Register',{position: toast.POSITION.TOP_LEFT,autoClose:1000})
    setLoading(false)
    nav('/login')
    }
    else 
    {
    toast.warning(Data.error,{position: toast.POSITION.TOP_LEFT,autoClose:1000})
    setLoading(false)
    }
    
    
  }

  return (
    <div class="container1 ">
     
      <img src="/images/Connekt.png" alt="Connekt Logo" className=" logo-imgreg" />
    <h3 class="text-center fw-bold ">REGISTER</h3>
    <PulseLoader color={color} loading={loading} size={15} />
    <div class="row w-100 justify-content-center mt-4">
      <div class="col-sm-8">
        <div class="card">
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="name">Name</label>
                <input onChange={handleChange} type="text" class="form-control" name="name" />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input onChange={handleChange} type="email" class="form-control" name="email" />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input onChange={handleChange} type="password" class="form-control" name="password" />
              </div>
              <div class="form-group">
                <label for="password2">Confirm Password</label>
                <input onChange={handleChange} type="password" class="form-control" name="password2" />
                <p class="mt-2">
                  <Link to="/login">Have an account? Login</Link>
                </p>
              </div>
              <button onClick={handleClick} class="btn btn-dark w-100">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
   


  )
}
export default Register