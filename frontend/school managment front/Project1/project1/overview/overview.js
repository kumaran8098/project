import "./overview.css"
import sig from '../signature.png'
import sig1 from '../welcome-img-1.jpg'





function Overview(){
    return<div >
        <h1 className='h1vid0' align='center'>OVERVIEW</h1>
        
 

<div className="talk1">



     <div>
       <h4 className="talk2">Grandmaster Talk</h4>
       <h2 className="talk3">EDUCATION IS THE MOST</h2>
       <h2 className="talk4">POWERFUL WEAPON</h2>
       <p className="talk5">Our students are talented, hard-working and full of good ideas. We encourage and empower them to bring their ideas to life. Hands-on opportunities are what we're all about. Our students are busy doing things that matter. Take a look at the opportunities you'll have at the University. The task of the modern educator is not to cut down jungles, but to irrigate deserts.</p>
       <img src={sig}></img></div>
       <div>
        <img className="sig1" src={sig1}></img>
       </div> </div>




       <div className="over1">

        <div id="over01">
            <div className="over02">
            <h3 className="st1">STUDENT</h3>
            <h3 className="st2">EVENTS</h3>
            </div>
        </div>
        <div id="over03">
            <div className="over03">
            <h3 className="st1">ClASSROOM</h3>
            <h3 className="st2">STORIES</h3>
            </div>
        </div>
        <div id="over04">
            <div className="over04">
            <h3 className="st1">TEACHERS</h3>
            <h3 className="st2">PROFILE</h3>
            </div>
        </div>


       </div>
      



    </div>
}
export default Overview