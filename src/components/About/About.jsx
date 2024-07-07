import React from 'react'
import "./About.css"
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
         <h1>About me</h1>
         <img src={theme_pattern} alt=''/>
      </div>
      <div className='about-sections'>
        <div className='about-left'>
            <img src={profile_img}/>
        </div>
        <div className='about-right'>
            <div className='about-para'>
               <p>A frontend developer specializes in crafting the user-facing side of websites and applications, ensuring that users have a seamless and engaging experience. </p>
               <p>Effective collaboration with backend developers is essential to integrate the frontend with server-side logic and APIs.</p>
            </div>
            <div className='about-skills'>
               <div className='about-skill'>
                  <p>HTML & CSS</p>
                  <hr style={{width:"50%"}}></hr>
               </div>
               <div className='about-skill'>
                  <p>Reactjs</p>
                  <hr style={{width:"70%"}}></hr>
               </div>
               <div className='about-skill'>
                  <p>MongoDB</p>
                  <hr style={{width:"60%"}}></hr>
               </div>
               <div className='about-skill'>
                  <p>JavaScript</p>
                  <hr style={{width:"50%"}}></hr>
               </div>
            </div>
        </div>
        </div>
        <div className='about-achievements'>
           <div className='about-achievement'>
             <h1>10+</h1>
             <p>Years of Experience</p>
           </div>
           <hr/>
           <div className='about-achievement'>
             <h1>90+</h1>
             <p>Project Completed</p>
           </div>
           <hr/>
           <div className='about-achievement'>
             <h1>15+</h1>
             <p>Happy Clients</p>
           </div>
        </div>
      </div>
  )
}

export default About