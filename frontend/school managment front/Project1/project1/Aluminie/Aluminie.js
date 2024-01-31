
import "./Aluminie.css"
import { FaFacebookSquare } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import teacher1 from "../teacher1.webp"
import teacher2 from "../teacher2.webp"
import teacher3 from "../teacher3.webp"
import teacher4 from "../teacher4.webp"



function Alumine(){
    return<div>
        <h1 align='center' className="alu1">AlUMINIE</h1>
        <section class="teacher" id="teacher">

    

            <div class="box-container">

                <div class="box">
                    <div class="image">
                        <img src={teacher1} />
                        <div class="share">
                        <a href="#" className="fab fa-facebook-f"><FaFacebookSquare /></a>
                            <a href="#" className="fab fa-twitter"><LuTwitter /></a>
                            <a href="#" className="fab fa-instagram"><FaInstagram /></a>
                        </div>
                    </div>
                    <div class="content">
                        <h3>john deo</h3>
                        <span>instructor</span>
                    </div>
                </div>

                <div class="box">
                    <div class="image">
                        <img src={teacher2} />
                        <div class="share">
                        <a href="#" className="fab fa-facebook-f"><FaFacebookSquare /></a>
                            <a href="#" className="fab fa-twitter"><LuTwitter /></a>
                            <a href="#" className="fab fa-instagram"><FaInstagram /></a>
                        </div>
                    </div>
                    <div class="content">
                        <h3>Alex</h3>
                        <span>software Testing</span>
                    </div>
                </div>

                <div class="box">
                    <div class="image">
                        <img src={teacher3} />
                        <div class="share">
                        <a href="#" className="fab fa-facebook-f"><FaFacebookSquare /></a>
                            <a href="#" className="fab fa-twitter"><LuTwitter /></a>
                            <a href="#" className="fab fa-instagram"><FaInstagram /></a>
                        </div>
                    </div>
                    <div class="content">
                        <h3>Albert</h3>
                        <span>instructor</span>
                    </div>
                </div>

                <div class="box">
                    <div class="image">
                        <img src={teacher4} />
                        <div class="share">
                            <a href="#" className="fab fa-facebook-f"><FaFacebookSquare /></a>
                            <a href="#" className="fab fa-twitter"><LuTwitter /></a>
                            <a href="#" className="fab fa-instagram"><FaInstagram /></a>
                        </div>
                    </div>
                    <div class="content">
                        <h3>James</h3>
                        <span>developer</span>
                    </div>
                </div>

            </div>

        </section>


    </div>
}
export default Alumine;