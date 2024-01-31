import "./Contact.css"
import { LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa6";
import pico1 from "../logo (1).png"




function Contact(){
    return <div>

        <h1 align='center' className="cn04">CONTACT</h1>
        


<div>
        <div className="cn1">
            <div >
                <img className="cn01" src={pico1}></img>
            </div>
           
            <div>
                <a>ABOUT</a><br></br>
                <a> CONTACT US</a><br></br>
                <a>LOCATION</a>
            </div>
            <div>
                <a>HOME</a><br></br>
                <a>STUDENTS</a><br></br>
                <a>TEACHERS</a>
            </div>
            <div>
                <a>BLOG</a><br></br>
                <a>LATEST NEWS</a><br></br>
                <a>RESOURES</a>
            </div>
            <div>
                <a>ACADEMIC</a><br></br>
                <a>CALENDER</a><br></br>
                <a>EVENTS</a>
            </div>
            <div className="cn02">
                    <a href="#" id='cn03' ><FaFacebookSquare /></a>
                        <a href="#" id='cn03'   ><LuTwitter /></a>
                        <a href="#" id='cn03' ><FaInstagram /></a>
            </div>


            
            

           
        </div>
        </div>
      
     
        

        



    </div>
}
export default Contact;