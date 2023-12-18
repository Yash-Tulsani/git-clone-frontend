import React, {useState} from 'react'
// import Navbar from "../Navbar/Navbar"
 import"./about.css"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"

// import p1 from "../Images/p1.png";
// import p2 from "../Images/p2.png";
// import b1 from "../Images/b1.png";

import Slide from './Slide';

function Props(props){
 
   
    return(
      <div className="box2">
      <div className="image2">
          <img alt="" src="https://images.thequint.com/thequint/2016-03/f86b9d79-149d-4226-997d-475e22f6862d/Water.jpg?auto=format,compress&fmt=webp&format=webp&w=1200&h=900&dpr=1.0"></img></div>    
             
          <h4><b>{props.name}</b></h4>
        <Link to={props.link} >View Profile</Link>
  
  
         
          
   
      </div>
  )
  }
  
 function About(){

    const history = useNavigate();
    //const history=useNavigate()
   const mn={
    width:"180px",
    height:"50px",
    fontSize:"15px",
    fontWeight:"800px",


  }
  const st={
    background:"white",
  }
  const  styleobj= {
   fontSize: "large",
  }


const styleobj2 = {
  color:"#8e44ad",
  paddingTop: "20px",
}


const styleobj3 = {
  textAlign: "center",
}

  
    const coursesPage = () => {
        history("/ourservice")
    }

    // const styleobj = {
    //     fontSize : "1vw",
    // }
const hd={
  
    textAlign: "center",
    paddingBottom: "2rem",
    textShadow: "var(--text-shadow)",
    textTransform: "uppercase",
    color: "var(--black)",
    fontSize: "4rem",
   
  
}
return(
    <>
    
  
<section className="home" id="home">
      {/* <div className="image">
        <img src="ther.jpg" alt="" />
      </div> */}
      <div className="image">
      {/* <img src={} alt="BigCo Inc. logo"/> */}
      <Slide/>
    </div>

      <div class="content">
        <h3>Measure.Empower.Prosper.</h3>
        <p> We serve as a platform for FPO members and
customers to buy/sell their resources and track the increase in
income under WDC 2.0. 
</p>
       
      </div>
    </section>

   

    <section className="serv">
      <h1>OUR USE CASES</h1>

      <div className="container888">
        <div className="box888">
          <div className="image888">
          <img src="https://static.wixstatic.com/media/ffd0eb_7b69ca4cf3fe4076b8f22fbbe218dc4c~mv2.gif" alt="BigCo Inc. logo"/>
          </div>
          <div className="name_job888">Water Resource Management</div>

          <p>
          This initiative
emphasizes water reuse and conservation,
improving resource management to tackle regional
water challenges.

          </p>
          {/* <div className="btns888">
            <button onClick={coursesPage}>
              Read More
            </button>
           
          </div> */}
        </div>

        <div className="box888">
          <div className="image888">
          <img src="https://i.makeagif.com/media/7-15-2015/GOV6M1.gif" alt="BigCo Inc. logo"/>
          </div>
          <div className="name_job888">Unlocking Ecotourism Potential</div>

          <p>Our initiatives
create opportunities for villagers to boost their
income through services like boating,
reservoir-adjacent parks, fishing.
</p>
          {/* <div className="btns888">
            <button onClick={coursesPage}>
              Read More
            </button>

          
          </div> */}
        </div>

        
        <div className="box888">
          <div className="image888">
          <img src="https://images.thequint.com/thequint/2016-03/f86b9d79-149d-4226-997d-475e22f6862d/Water.jpg?auto=format,compress&fmt=webp&format=webp&w=1200&h=900&dpr=1.0" alt="BigCo Inc. logo"/>
          </div>
          <div className="name_job888" >
          Community Support
          </div>

          <p>
          Supporting farmers by
preventing droughts, ensuring reliable water
supply, and boosting per capita income.
          </p>
          {/* <div className="btns888">
            <button onClick={coursesPage}>
              Read More
            </button>
         
          </div> */}
        </div>
      </div>
    </section>

    <hr size='10%'/>


    
    <br></br>
   <div className="gh">
   <br></br>
   <h1 style={styleobj3}>OUR TEAM</h1>
   <br></br>




   <div className="container_ss">
    
      <Props img="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" name="Yash Tulsani" link="http://www.linkedin.com/"></Props>
              <Props img="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" name="Tejas Ajay Parse" link="http://www.linledin.com/"></Props>
             <Props img="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" name="Anmol Singh" link="http://www.linledin.com/"></Props></div>


  <div className="container_ss">
                 <Props img="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" name="Abhay Pratap Singh" link="http://www.linledin.com/"></Props>
                      <Props img="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" name="Nithish Reddy" link="http://www.linledin.com/"></Props>
  
    
                      <Props img="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" name="Sai Ramya" link="http://www.linledin.com/"></Props>
</div>
</div>


  



</>
)
 }
    export default About;