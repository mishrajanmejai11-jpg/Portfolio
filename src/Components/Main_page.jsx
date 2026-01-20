import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import { getUser } from "../Api/api";
import "../css/mainpage.css";
import { ContactUs } from "./Contactus";
import Header from "./Header";
import { Project } from "./Project";
// import { useNavigate } from "react-router-dom";


function Mainpage(){
    const navigate = useNavigate();
    // let [user,setUser]=useState([]);
    // useEffect(()=>{
    //     try {
    //        const data=getUser()
    //        setUser(data);
            
    //     } catch (error) {
    //         console.error(error);
    //     }
    // },[]);

    return(
        <>
        <Header/>
        
        {/* <h1 className="main_name">Janmejai Mishra</h1> */}
        <h1 className="main_name">
  <span className="word">Janmejai</span>
  <span className="word">Mishra</span>
</h1>
        <span className="main_main_heading">FullStack Developer</span>
        <img className="main_heading_down_images" src=""></img>
        <section className="main_name_section_one">
            <p>Hi, I'm  <label className="label_name_section">Janmejai Mishra</label>  FullStack / MERN Stack Developer
            I build fast, scalable and user-friendly web applications using
            React, Node.js, MongoDB and modern UI practices.</p>
            <button className="btn_view_project_section" onClick={()=> navigate("/projects")}>View Project</button>
            <button className="btn_download_resume_section" onClick={() => window.open("/resume.pdf", "_blank")}>Download Resume</button>
            <button className="btn_contact_me_section" onClick={()=> navigate("/contact")}>Contact me</button>
        </section>
        <section className="main_about_me_section_two">About Me 
            <p className="section_two_intro_line">
                I’m a passionate FullStack / MERN Stack Developer with hands-on experience
                 in building real-world applications like e-commerce platforms and admin dashboards.
                 I enjoy converting complex problems into simple, clean and performant UI solutions. 
                 I focus on writing readable code,reusable components and scalable architecture.
            </p>
        </section>
        <div className="main_skills_container"> <span className="skills_heading">Skills</span>
           Frontend:React, Vite, JavaScript (ES6+), HTML5, CSS3, Tailwind, Redux Toolkit<br/>
           Backend:Node.js, Express.js, MongoDB, Mongoose<br/>
           Tools:Git, GitHub, Postman, Cloudinary, Render, Vercel<br/>
           Others:REST APIs, JWT Authentication, Responsive Design
        </div>
        <Project/>
        <ContactUs/>
        </>
    )
}
export default Mainpage