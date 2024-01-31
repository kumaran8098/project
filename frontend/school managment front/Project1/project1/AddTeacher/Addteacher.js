import React, { useState } from "react";
import axios from "axios";
import "./Addteacher.css";


function AddTeacher() {
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    Gender: "",
    date: "",
    addAddress: "",
    MobileNo: "",
    Qulification: "",
    Experience:"",
    Class:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const condition =[
        form.name.length !==0 &&
        form.age.length !==0 &&
        form.email.length !==0 &&
        form.Gender.length !==0 &&
        form.date.length !==0 &&
        form.addAddress.length !==0 &&
        form.MobileNo.length !==0 &&  // corrected typo in addTeacher
        form.Qulification.length !==0 &&
        form.Experience.length !==0 &&
        form.Class.length !==0]

        let kumaran=condition.every((value)=>(value))


    // Rest of your code...


    if (kumaran) {
      axios
        .post("http://localhost:3001/streetteacher",form,{
          headers: { 
            'Authorization': 'Basic YWRtaW46MTIz'
          }
        })
        .then((res) => {
          console.log("Success:", res);
          setForm({
            name: "",
            email: "",
            age: "",
            Gender: "",
            date: "",
            addAddress: "",
            MobileNo: "",
            Qulification: "",
            Experience:"",
            Class:""
          });
          
          
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      setError(true);
    }
  };

  return (
    <div className="uliter01">
      <h1 className="tamil1">Add Teacher</h1>
      <div>


        <div className="salu3">
        <div className="salu1">
        <h3 className="salu4">Name:</h3>
        <input
          className="uliter02"
          type="text"
          placeholder="Enter your name"
          name="name"
          value={form.name}
          onChange={handleChange}
        /></div><div className="salu2">
        <h3 className="salu4">Age:</h3>
        <input
          className="uliter02"
          type="number"
          placeholder="please Enter your age"
          name="age"
          value={form.age}
          onChange={handleChange}
        /></div></div>


        <div className="salu3">
          <div className="salu1">
        <h3 className="salu4">Email:</h3>
        <input
        className="uliter02"
          type="email"
          placeholder="Enter your email"
          name="email"
          value={form.email}
          onChange={handleChange}
        /><br></br></div>
        <div className="salu2">
          
        <h3 className="salu4">Gender:</h3>
        <select
          name="Gender"
          value={form.Gender}
          onChange={handleChange}
          className="uliter02"
        >
          <option className="uliter02" value="male">Male</option>
          <option className="uliter02" value="female">Female</option>
          <option className="uliter02" value="other">Other</option>
        </select><br></br></div>
        </div>

        <div className="salu3">
          <div className="salu1">
        <h3 className="salu4">Date of birth:</h3>
        <input
        className="uliter02"
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        /><br></br></div>
        <div className="salu2">

        <h3 className="salu4">Qulification:</h3>
        <input
        className="uliter02"
          type="text"
          placeholder="Enter Your qulification"
          name="Qulification"
          value={form.Qulification}
          onChange={handleChange}
        /><br></br></div>
        </div>

       <div className="salu3">
        <div className="salu1">
        <h3 className="salu4">Phone Number</h3>
        <input
        className="uliter02"
          type="number"
          placeholder="Enter Your number"
          name="MobileNo"
          value={form.MobileNo}
          onChange={handleChange}
        /><br></br></div>
        <div className="salu2">
        <h3 className="salu4">Address:</h3>
        <textarea
        className="uliter02"
          placeholder="Address.."
          name="addAddress"
          value={form.addAddress}
          onChange={handleChange}
        ></textarea><br></br></div>
        </div>

        <div className="salu3">
          <div className="salu1">
        <h3 className="salu4">Experience:</h3>
        <input
        className="uliter02"
        placeholder="Enter Your Experience"
          type="text"
          name="Experience"
          value={form.Experience}
          onChange={handleChange}
        /><br></br></div>
        <div className="salu2">

        <h3 className="salu4">Class:</h3>
        <input
        className="uliter02"
          type="number"
          placeholder="Enter Your Class"
          name="Class"
          value={form.Class}
          onChange={handleChange}
        /><br></br></div>
        </div>

        <div className="salu01">
          {error && <h4  className="uliter04">Please fill all required fields</h4>}
          <button className="uliter03" onClick={handleSubmit}>Submit</button>
        </div>


      </div>

    </div>
  );
}

export default AddTeacher;
