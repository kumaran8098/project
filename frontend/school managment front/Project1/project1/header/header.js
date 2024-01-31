import React from 'react';
import "./header.css";
import img1 from "../download (1).png";
import { useNavigate } from "react-router-dom";

function PHeader() {
    const studentnavigate = useNavigate();
    const studentvalidate = () => {
        studentnavigate('/StudentLogin');
    };

    const Adminlogin = useNavigate();
    const Adminvalidate = () => {
        Adminlogin('/AdminLogin');
    };

    const Teacherlogin = useNavigate();
    const Teachervalidate = () => {
        Teacherlogin('/Teacherlogin');
    };

    return (
        <div>
            <div className="prdiv5">
                <div className="prdiv1">
                    <div className="prdiv0">
                        <img className="img0" src={img1} alt="Logo" />
                        <div className="h1div">
                            <h3>INTERNATIONAL</h3>
                            <h3>GRAMMAR SCHOOL</h3>
                        </div>
                    </div>
                    <div className="prbtn1">
                        <button id='prbtn1' onClick={studentvalidate}>Student Login</button>
                        <button id='prbtn2' onClick={Teachervalidate}>Teacher Login</button>
                        <button id='prbtn3' onClick={Adminvalidate}>Admin Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PHeader;
