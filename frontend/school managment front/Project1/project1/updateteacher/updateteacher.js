import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./updateteacher.css"

function UpdateTeacher(){
    const {_id}=useParams()
    const [form, setForm] = useState({
      age:" "
     
    });

   
   
   
    useEffect(() => {
      axios.get(`http://localhost:3001/streetteacher`, {
        headers: { 
          'Authorization': 'Basic YWRtaW46MTIz'
        }
      })
        .then((res) => {
          const teacher = res.data.find((ele) => ele._id === _id);
          setForm(teacher);
        })
        .catch((err) => {
          console.log(err); 
        });
    }, [_id]);
  

  const handleChange=(e)=>{
    const {name,value}=e.target
    setForm((prev)=>({
      ...prev,
      [name]:value
    }))

  }
  
  const submit = () => {
    axios.put(`http://localhost:3001/streetteacher/update/${_id}`, form, {
      headers: {
        'Authorization': 'Basic YWRtaW46MTIz'
      }
    })
      .then((res) => {
        console.log("success", res);
        setForm({
          name: "",
          email: "",
          age: "",
          Gender: "",
          date: "",
          addAddress: "",
          MobileNo: "",
          Qulification: "",
          Experience: "",
          Class: ""
        });
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  
    
  return (
    <div className="four01">
      <h1 className="english1">UpdateTeacher</h1>
      <div>


        <div className="leven3">
        <div className="leven1">
        <h3 className="leven4">Name:</h3>
        <input
          className="four02"
          type="text"
          placeholder="Enter your name"
          name="name"
          value={form.name}
          onChange={handleChange}
        /></div><div className="leven2">
        <h3 className="leven4">Age:</h3>
        <input
          className="four02"
          type="number"
          placeholder="please Enter your age"
          name="age"
          value={form.age}
          onChange={handleChange}
        /></div></div>


        <div className="leven3">
          <div className="leven1">
        <h3 className="leven4">Email:</h3>
        <input
        className="four02"
          type="email"
          placeholder="Enter your email"
          name="email"
          value={form.email}
          onChange={handleChange}
        /><br></br></div>
        <div className="leven2">
          
        <h3 className="leven4">Gender:</h3>
        <select
          name="Gender"
          value={form.Gender}
          onChange={handleChange}
          className="four02"
        >
          <option className="uliter02" value="male">Male</option>
          <option className="uliter02" value="female">Female</option>
          <option className="uliter02" value="other">Other</option>
        </select><br></br></div>
        </div>

        <div className="leven3">
          <div className="leven1">
        <h3 className="leven4">Date of birth:</h3>
        <input
        className="four02"
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        /><br></br></div>
        <div className="leven2">

        <h3 className="leven4">Qulification:</h3>
        <input
        className="four02"
          type="text"
          placeholder="Enter Your qulification"
          name="Qulification"
          value={form.Qulification}
          onChange={handleChange}
        /><br></br></div>
        </div>

       <div className="leven3">
        <div className="leven1">
        <h3 className="leven4">Phone Number</h3>
        <input
        className="four02"
          type="number"
          placeholder="Enter Your number"
          name="MobileNo"
          value={form.MobileNo}
          onChange={handleChange}
        /><br></br></div>
        <div className="leven2">
        <h3 className="leven4">Address:</h3>
        <textarea
        className="four02"
          placeholder="Address.."
          name="addAddress"
          value={form.addAddress}
          onChange={handleChange}
        ></textarea><br></br></div>
        </div>

        <div className="leven3">
          <div className="leven1">
        <h3 className="leven4">Experience:</h3>
        <input
        className="four02"
        placeholder="Enter Your Experience"
          type="text"
          name="Experience"
          value={form.Experience}
          onChange={handleChange}
        /><br></br></div>
        <div className="leven2">

        <h3 className="leven4">Class:</h3>
        <input
        className="four02"
          type="number"
          placeholder="Enter Your Class"
          name="Class"
          value={form.Class}
          onChange={handleChange}
        /><br></br></div>
        </div>

        <div className="leven01">
          <button className="four03" onClick={submit}>Submit</button>
        </div>


      </div>

    </div>
  );
}

export default UpdateTeacher;