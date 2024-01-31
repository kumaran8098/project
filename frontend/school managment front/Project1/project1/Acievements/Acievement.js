 import "./Acievement.css"
 import pic from '../we-have-faith-img-1.png'
 import pic1 from '../we-have-faith-img-2.png'
 import pic2 from '../we-have-faith-img-3.png'
 import pic3 from '../we-have-faith-img-4.png'


function Acievement(){
    return<div>
        <h1 className="minie">  ACHIEVEMENTS</h1>

        <div>
            <h3 align='center'>WE HAVE FAITH IN OUR STUDENT FUTURE</h3>
            <p align='center'>Our students are talented, hard-working and full of good ideas. We encourage and empower them to bring their ideas to life. </p>
            <div className="acive1">
                <div className="acive3" >
                    <img className="acive2"   src={pic}></img>
                    <h4 align='center' id="gra1">Empower</h4>
                    <p align='center'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat</p>
                </div>
                <div className="acive3">
                    <img   className="acive5" src={pic1}></img>
                    <h4 align='center' id="gra1">Engage</h4>
                    <p align='center'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat</p>
                </div>
                <div className="acive3" >
                    <img className="acive2" src={pic2}></img>
                    <h4 align='center' id='gra1'>Graduation</h4>
                    <p align='center'> Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat</p>
                </div>
                <div  className="acive3">
                    <img className="acive2" src={pic3}></img>
                    <h4 align="center" id="gra1">Awarding</h4>
                    <p align='center'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat </p>
                </div> 
            </div>
        </div>


        <div className="ter1">
            <div className="ter2">
            <h3 align='center'> OUR TEACHERS AND STUDENTS ACHIEVEMENTS</h3>
            <div className="ded1">
           <div>
            <h1 align='center' className="numb1">1,954</h1>
            <h4 align='center'>YEAR FOUNDED</h4>
           </div>
           <div>
            <h1 align='center'  className="numb1">934</h1>
            <h4 align='center'>CERTIFIED TEACHERS</h4>
           </div>
           <div>
            <h1 align='center'  className="numb1">65,409</h1>
            <h4 align='center'>GRADUATED STUDENTS</h4> 
           </div>
           <div>
            <h1 align='center'  className="numb1">289</h1>
            <h4 align='center'>AWARDS WINNER</h4>
           </div>
            </div>

            </div>

        </div>









    </div>
}
export default Acievement;