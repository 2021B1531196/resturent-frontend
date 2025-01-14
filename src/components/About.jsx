import React from 'react'
import knife from "../assets/knife.png"
import G from "../assets/G.png"
import "./About.css"
import spoon from "../assets/spoon.png"

function About() {
  return (
    <div className='app__aboutus' id='about'>
        <div className="app__aboutus-overlay">
            <img src={G} alt="" />
        </div>
        <div className="app_aboutus-content">
            <div className="app_aboutus-content-about">
                <h1>About Us</h1>
                <img src={spoon} alt="" className='spoon__img' />
                <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni sunt odio ullam tempora laudantium nesciunt delectus deleniti repudiandae. Velit labore sunt non perferendis est. Amet magnam tenetur veritatis ea accusamus?</p>
            </div>
            <div className="app_aboutus-content-knife">
                <img src={knife} alt="" />
            </div>
            <div className="app_aboutus-content-history">
                <h1>Our History</h1>
                <img src={spoon} alt="" className='spoon__img' />
                <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni sunt odio ullam tempora laudantium nesciunt delectus deleniti repudiandae. Velit labore sunt non perferendis est. Amet magnam tenetur veritatis ea accusamus?</p>
            </div>
        </div>
    </div>
  )
}

export default About