import React from "react";
import "../css/project.css";

export function Project(){
    return(
        <>
         <div className="main_projects_container">Projects 
         <p className="intro_about_projects">
             ShopNix - Full-Stack E-Commerce Platform<br/>
            • Built a complete e-commerce web application using MERN stack<br/>
            • Implemented user authentication (JWT) and role-based access<br/>
            • Created admin dashboard for product & order management<br/>
            • Integrated Cloudinary for image uploads<br/>
            • Deployed frontend & backend on cloud platforms<br/>
            Tech Stack:
            React, Redux Toolkit, Node.js, Express, MongoDB, Cloudinary

            </p>
            <img className="img_project_screenshot" src="https://res.cloudinary.com/dubiq9rtn/image/upload/v1768685615/2026-01-18_stoagm.png"></img>
            <button className="btn_live_demo" onClick={() => window.open("https://shopnix-client.vercel.app", "_blank")}>
             Live Project</button>
            <button className="btn_fithub_repo" onClick={()=> window.open("https://github.com/mishrajanmejai11-jpg")}>GitHub Repo</button>
        </div>
        </>
    )
}