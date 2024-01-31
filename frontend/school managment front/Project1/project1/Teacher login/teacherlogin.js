import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate,  } from "react-router-dom";
import "./teacherlogin.css"

function Teacherlogin() {
  const [data, SetData] = useState([]);
  const [Errpassword, SetErrpassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/streetteacher`, {
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
    const invalid = data.find((admin) => {
      return admin.name === username && admin.date === password;

    })
    if (invalid) {

      SetErrpassword(false)
      navigate("/TeacherPage/"+invalid._id)
    }
    else {
      SetErrpassword(true)
      

    }


  })

  return (
    <div className="cidpr010">
      <div className="cidpr01">
        <button className="cidpr03"> Teacher Login </button>
        <h4 className="hed01">User name:</h4>
        <input type='text' id="username" placeholder='Enter your username' />
        <h4 className="hed02">Password:</h4>
        <input type="date" id="password" placeholder='Enter your password' /><br />
        {Errpassword && <p className="password01">Invalid Username and Password</p>}
        <button className="cidpr05" onClick={submit}>Login</button>

      </div>
    </div>
  );
}

export default Teacherlogin ;
