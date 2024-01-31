import { useEffect, useState } from "react";
import Stdimgs1 from "../boys-286245_1280.jpg";
import './studentpage.css'
import axios from "axios";
import { useParams } from "react-router-dom";

function Studentpage() {
  let {_id} = useParams();
  const [data, setData] = useState({
    name: "",
    date: "",
    age: "",
    Gender: "",
    father: "",
    Mother: "",
    Class: "",
    address: "",
    Blood: "",
    occupption: "",
  });
 
  useEffect(() => {
    axios.get(`http://localhost:3001/Student`, {
      headers: { Authorization: "Basic YWRtaW46MTIz" },
    })
    .then((res) => {
        console.log(res.data)
    let student=res.data.find((ele)=>ele.name== _id)
    console.log(student);
    setData(student)
    })
    .catch((err) => {
      console.log(err);
    });
  }, [_id]);

  

  

  return (
    <div id="studentbody">
      <h1>HI STUDENT {data.name}</h1>
      <div>
        <div id="studentvalidationdiv">
          <div>
            <img src={Stdimgs1} alt="Student" />
            <div className="flexstudent">
              <h3>NAME: <label>{data.name}</label></h3>
              <h3>Age:<label>{data.age}</label></h3>
              <h3>Dob:<label>{data.date}</label></h3>
              <h3>Class:<label>{data.Class}</label></h3>
              <h3>Blood:<label>{data.Blood}</label></h3>
              <h3>Father Name :<label>{data.father}</label></h3>
              <h3>Mother Name:<label>{data.Mother}</label></h3>
              <h3>Occupption:<label>{data.occupption}</label></h3>
              <h3>Address:<label>{data.address}</label></h3>
            </div>
            {/* Add other student details here */}
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Studentpage;
