import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'
const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                <div className="about-para">
    <p>I am a skilled Full-Stack Web Developer with extensive experience in designing and building scalable, dynamic web applications. Proficient in both frontend and backend technologies, I specialize in delivering seamless digital solutions tailored to meet diverse business needs.</p>
    <p>Passionate about leveraging modern frameworks and tools, I take pride in writing clean, efficient code and solving complex challenges. With a strong focus on user experience and performance, I am dedicated to transforming ideas into impactful, high-quality web applications.</p>
</div>

                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p> <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React Js</p> <hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p> <hr style={{ width: "80%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Next Js</p> <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>MongoDb & MySQL</p> <hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Typescript</p> <hr style={{ width: "80%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Node Js</p> <hr style={{ width: "70%" }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-achievements">
                <div className="about-achievement"><h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement"><h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement"><h1>5+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About
