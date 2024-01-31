import axios from "axios";
import { useState } from "react";
import "./addstudent.css";


function Addstudent() {
    const [error, seterror] = useState(false)
    const [form, setForm] = useState({
        name: "",
        date: "",
        age: "",
        Gender: "",
        Class: "",
        Blood: "",
        father: "",
        Mother: "",
        occupption: "",
        address: ""

    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    const student = () => {
        const condition =[
        form.name.length !== 0 &&
         form.date.length !== 0 &&
          form.age.length !== 0 &&
           form.Gender.length !== 0 &&
            form.Class.length !== 0 &&
             form.Blood.length !== 0 &&
              form.father.length !== 0 &&
               form.Mother.length !== 0 &&
                form.occupption.length !== 0 &&
                 form.address.length !== 0];
                 let prathap=condition.every((value)=>(value))
        if (prathap) {
            axios.post(" http://localhost:3001/Student ", form,{
                headers: { 
                    'Authorization': 'Basic YWRtaW46MTIz'
                  }
            })
                .then((res) => {
                    console.log("success", res);
                    setForm({
                        name: "",
                        date: "",
                        age: "",
                        Gender: "",
                        Class: "",
                        Blood: "",
                        father: "",
                        Mother: "",
                        occupption: "",
                        address: ""
                    })

                })
                .catch((err) => {
                    console.log(err, "errr")
                })
        } else {
            seterror(true);
        }

    }


    return <div className="ten01">
        <h1 className="tne1">Add Student</h1>
        <div>

         <div className="queit3">
            <div className="queit1">
        <h3 className="queit4">Student Name:</h3>
        <input type="name"
        className="ten02"
         name="name" 
         placeholder="Enter Your name"
        value={form.name}
        onChange={handleChange}>
        </input><br></br></div>
        <div className="queit2">
        <h3 className="queit4"> Student D.O.B: </h3>
        <input type="date"
        className="ten02"
         name="date"
         value={form.date}
         onChange={handleChange}>
        </input><br></br></div>
        </div>
     
     <div className="queit3"><div className="queit1">
        <h3 className="queit4">Student Age:</h3>
        <input type="number"
        className="ten02"
         name="age" 
         placeholder="Enter your age"
         value={form.age}
         onChange={handleChange}>
        </input><br></br></div>
        <div className="queit2">
        <h3 className="queit4">Gender:</h3>
        <select value={form.Gender} name="Gender" className="ten02" onChange={handleChange}>
            <option value="Male" className="ten02">Male</option>
            <option value="Female" className="ten02">Female</option>
            <option value="Other" className="ten02">Other</option>
        </select><br></br></div>
        </div>

       <div className="queit3">
        <div className="queit1">
        <h3 className="queit4">Class:</h3>
        <input type="text" 
        className="ten02"
        placeholder="Enter your class"
        value={form.Class}
        name="Class"
        onChange={handleChange} 
        ></input><br></br></div>
       <div className="queit2">
        <h3 className="queit4">Blood Group:</h3>
        <input type="text"
        className="ten02"
         placeholder="Your Blood Group"
         value={form.Blood}
         name="Blood"
        onChange={handleChange}>
        </input><br></br></div>
        </div>

      <div className="queit3">
        <div className="queit1">
        <h3 className="queit4">Father Name:</h3>
        <input type="name"
        className="ten02"
         placeholder="Enter Your father Name"
         value={form.father}
         name="father"
         onChange={handleChange}>
         </input><br></br></div>
        <div className="queit2">
        <h3 className="queit4">Mother Name:</h3>
        <input type="name"
        className="ten02"
         placeholder="Enter Your Mother Name"
         value={form.Mother}
         name="Mother"
         onChange={handleChange}>
        </input><br></br></div>
        </div>

        <div className="queit3">
            <div className="queit1">
        <h3 className="queit4">Occupption:</h3>
        <input type="text"
        className="ten02"
         value={form.occupption}
         name="occupption"
         onChange={handleChange}>
        </input><br></br></div>
        <div className="queit2">
        <h3 className="queit4">Address:</h3>
        <textarea placeholder="Address...."
         value={form.address}
         name="address"
         className="ten02"
         onChange={handleChange}>
        </textarea><br></br></div>
        </div>

        {error && <p className="ten04">Please fill all required fields</p>}
        <button onClick={student} className="ten03">Submit</button>


    </div></div>
}
export default Addstudent;