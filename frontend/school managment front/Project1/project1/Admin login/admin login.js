import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate,  } from "react-router-dom";
import "./admin login.css"

function AdminLogin() {
  const [data, SetData] = useState([]);
  const [Errpassword, SetErrpassword] = useState(false);

   

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/bestadmin",{
      headers: { 
        'Authorization': 'Basic YWRtaW46MTIz'
      }
    })
      .then((res) => {
        SetData(res.data)
      })
      .catch((err) => {
        console.log('Error fetching admin data', err);
      }, [])

  })
  let submit = (() => {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    const invalid = data.some((admin) => {
      return admin.name === username && admin.pass === password;

    })
    if (invalid) {

      SetErrpassword(false)
      navigate("/Adminpage/"+ username)
    }
    else {
      SetErrpassword(true)
      

    }


  })

  return (
    <div className="cidpr010">
      <div className="cidpr01">
        <button className="cidpr03"> Admin Login </button>
        <h4 className="hed01">User name:</h4>
        <input type='text' id="username" placeholder='Enter your username' />
        <h4 className="hed02">Password:</h4>
        <input type="password" id="password" placeholder='Enter your password' /><br />
        {Errpassword && <p className="password01">Invalid Username and Password</p>}
        <button className="cidpr05" onClick={submit}>Login</button>

      </div>
    </div>
  );
}

export default AdminLogin;
