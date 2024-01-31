import { useParams, Link } from "react-router-dom";
import "./teacherpage.css";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

function Teacherpage() {
  const { _id } = useParams();
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [cursor, setCursor] = useState(false);

  const [show, setShow] = useState(false);
  const [border, setBorder] = useState(true);
  const [edit, setEdit] = useState(false);
   const [Table,setable]=useState()
   let today=new Date().getDay()
 

  const [teachers, setTeachers] = useState({
    _id: "",
    name: "",
    age: "",
    Gender: "",
    Qulification: "",
    Experience: "",
    email: "",
    MobileNo: "",
    addAddress: "",
  });
  let obj={}
  if(Table&& Table.length !=0){
    obj=Table.find((ele)=>ele.name===teachers.name)
  }
  let uu={}

if(obj.periods){
 uu=obj.periods[today]
}
else{
  {}
}

  useEffect(() => {
    axios
      .get('http://localhost:3001/streetteacher', {
        headers: { Authorization: "Basic YWRtaW46MTIz" },
      })
      .then((res) => {
        const teacher = res.data.find((ele) => ele._id === _id);
        setTeachers(teacher);
      })
      .catch((err) => {
        console.log(err);
      });
      axios
      .get('http://localhost:3001/Timetable', {
        headers: { Authorization: "Basic YWRtaW46MTIz" },
      })
      .then((res) => {
     setable(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
      
  }, [_id]);

  const handleCheckInOut = () => {
    setIsCheckedIn(!isCheckedIn);
    setCursor(!cursor);
    setShow(!show);
  };

  const editBtn = () => {
    setBorder(false);
    setEdit(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeachers((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const saveBtn = () => {
    axios
      .put(`http://localhost:3001/streetteacher/update/${teachers._id}`, teachers, {
        headers: { Authorization: "Basic YWRtaW46MTIz" },
      })
      .then(() => {
        console.log("success update");
      })
      .catch((error) => {
        console.error("Error updating:", error);
      });
    setBorder(true);
    setEdit(false);
  };

  return (
    <div >
      <div id="ajay1">
        <h1>hi teacher {teachers.name}  </h1>
        <div>
          <Button
            id="checkin1"
            onClick={handleCheckInOut}
            className={isCheckedIn ? "" : " "}
          >
            {isCheckedIn ? "CHECK OUT " : "CHECK IN"}
          </Button>

          {cursor ? (
            <Link className="leavebtn" to="/LeaveRequest">
              Leaverequest
            </Link>
          ) : (
            <Link className="leavebtn1">Leaverequest</Link>
          )}

          {cursor ? (
            <Link className="leavebtn" to={"/Atanance/"+ teachers.name}>
              Attendance
            </Link>
          ) : (
            <Link className="leavebtn1">Attendance</Link>
          )}
        </div>
      </div>
      {show && (
        <div>
          <div id="showflex">
            <h4 className="hin1">
              name:<label>{teachers.name}</label>
            </h4>
            <h4 className="hin1">
              age:<label>{teachers.age}</label>
            </h4>
            
            <div className="fin1">
            <h4 className="hin1">
              Gender:<label>{teachers.Gender}</label>
            </h4>
            <h4 className="hin2">
              qualification:<label>{teachers.Qulification}</label>
            </h4>
            </div>
            
            <h4 className="hin3">
              experiance:<label>{teachers.Experience}</label>
            </h4>
          </div>
          <div id="showflex1">
            <div>
            <h5 >
              Email:
              <input
                name="email"
                value={teachers.email}
                className={border ? "updateinput" : "updateinput2"}
                onChange={handleChange}
              />
            </h5>
            

            <h5 >
              MobileNo:
              <input
                name="MobileNo"
                value={teachers.MobileNo}
                className={border ? "updateinput" : "updateinput1"}
                onChange={edit ? handleChange : null}
              />
            </h5>
            </div>
            
          <h5 className="adreasname">
            Address:
            <textarea
              value={teachers.addAddress}
              className={border ? "teacherinputadrass" : "teacherinputadrass1"}
              name="addAddress"
              onChange={edit ? handleChange : null}
            />
          </h5>
            <div>
              <button className="editbtn" onClick={() => editBtn(teachers._id)}>
                Edit
              </button>
              <button onClick={saveBtn} className="savebtn">Save</button>
            </div>
          </div>

          <h1 className="text-center" id="me1">time table</h1>
          <table>
            <tr>
              <th>p/1</th>
              <th>p/2</th>
              <th>p/3</th>
              <th>p/4</th>
              <th>p/5</th>
              <th>p/6</th>
              <th>p/7</th>
              <th>p/8</th>
            </tr>
            <tr>
              <td>{uu.one}</td>
              <td>{uu.two}</td>
              <td>{uu.three}</td>
              <td>{uu.four}</td>
              <td>{uu.five}</td>
              <td>{uu.six}</td>
              <td>{uu.seven}</td>
              <td>{uu.eight}</td>
             

            </tr>

          </table>
          {
                today == 0 || today == 6 && <h1>------today leave------</h1>
              }

         
        </div>
      )}
    </div>
  );
}

export default Teacherpage;