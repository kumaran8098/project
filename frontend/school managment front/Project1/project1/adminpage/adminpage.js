import { Link, useNavigate, useParams } from "react-router-dom";
import "./adminpage.css"
import { useEffect, useState } from "react";
import axios from "axios";



function Adminpage() {
  const { name } = useParams()
  const [data, setdata] = useState(false)
  const [show, setshow] = useState('')
  const [ischeckedin, setcheckin] = useState(false)
  const [cursore, setcursor] = useState(false)
  const navigate = useNavigate()
  const navigate1 = useNavigate()
  const [teacherdata,setteacherdata]=useState()
  useEffect(() => {
    axios.get("http://localhost:3001/bestadmin",{
      headers: { 
        'Authorization': 'Basic YWRtaW46MTIz'
      }

    })
      .then((res) => {
        setshow(res.data);
      
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const checkin = () => {
    setcheckin(!ischeckedin)
    setdata(!data)
    setcursor(!cursore)

  }
  useEffect(()=>{
    axios.get("http://localhost:3001/streetteacher",{
      headers: { 
        'Authorization': 'Basic YWRtaW46MTIz'
      }

    })
    .then((res)=>{
      setteacherdata(res.data);
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })

  },[])

  const dahsboard = (() => {
    navigate('/AddTeacher')

  })
  const addstudent = () => {
    navigate1("/Addstudent")
  }

  const kdelete = (_id) => {
    axios.delete(`http://localhost:3001/streetteacher/delete/${_id}`,{
      headers: { 
        'Authorization': 'Basic YWRtaW46MTIz'
      }
    })
      .then(() => {
        setteacherdata((prev) => prev.filter((ele) => ele._id !== _id));
      })
      .catch((err) => {
        console.log(err);
        // Handle error, display a message, etc.
      });
  };
  

  

  return <div>
    <div className="damin1">
      <h1 id="damin01">Hi! Admin {name} </h1>
      <div className="damin2">
        <button  id="damin0003" onClick={checkin} className={ischeckedin ? "" :"" }>      {ischeckedin ? "checkout" : "checkin"}</button>

        <button id="damin0004" onClick={dahsboard} className={cursore ? "text" : ""}>AddTeacher</button>
        <button id='damin5' onClick={addstudent}>AddStudent</button>
      </div>
    </div>

    <div>
      {data &&
        show
          .filter((admin) => admin.name === name)
          .map((admin) => (
            <div >
              <div className="liter01">
                <div className="oli01">
                    < h1 id='il' >Name: <label className="danger1">{admin.name}</label></h1>
                    <h1 id='il'>Age: <label className="danger1 ">{admin.Age}</label> </h1>
                    <h1 id='il'>Qulification:<label className="danger1 ">{admin.Qulification}</  label></h1>
                    <h1 id="il">Gender:<label className="danger1 ">{admin.Gender}</label> </h1>
                </div>
                <h1 className="liter02">Leave Request</h1>
                
              </div>
              
                <h1 className="lit1 " >TEACHER LIST</h1>
                <div className="minad1">
                {
                  teacherdata.map((teacher)=>{
                    return <div key={teacher._id}>
                    <table id="label1">
                     <tr>
                     <th className="ht1" >Name</th>
                     <th className="ht1">Age</th>
                     <th className="ht1">Gender</th>
                     <th className="ht1">Email</th>
                     <th className="ht1">Date</th>
                     <th className="ht1">Qulification</th>
                     <th className="ht1">Experience</th>
                     <th className="ht1">Class</th>
                     <th className="ht1">Mobile No</th>
                     <th className="ht1">Address</th>
                     <th className="ht1"> U/d</th>
                     
                     
                     </tr>
                     <tr>
                      <td className="ht2">{teacher.name}</td>
                      <td className="ht2">{teacher.age}</td>
                      <td className="ht2">{teacher.Gender}</td>
                      <td className="ht2">{teacher.email}</td>
                      <td className="ht2">{teacher.date}</td>
                      <td className="ht2">{teacher.Qulification}</td>
                      <td className="ht2">{teacher.Experience}</td>
                      <td className="ht2">{teacher.Class}</td>
                      <td className="ht2">{teacher.MobileNo}</td>
                      <td className="ht2">{teacher.addAddress}</td>
                      <td className="ht2"><Link to={`/UpdateTeacher/${teacher._id}`} id="update01">update</Link>
                      <button id="bt1431"   onClick={()=>kdelete(teacher._id)}>delete</button></td>
                     </tr>
                    </table>
                    </div>

                  })
                }
              </div>
            </div>
          ))}
    </div>




  </div>
}
export default Adminpage;