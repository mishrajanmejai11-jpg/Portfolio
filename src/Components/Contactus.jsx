import React from "react";
import "../css/contactus.css";


export function ContactUs(){
    return( 
    <footer className="contact_footer">
      <div className="contact_container">

        <h2 className="contact_heading">Contact Me</h2>
        <p className="contact_subheading">
          Feel free to reach out for collaborations or opportunities
        </p>

        <div className="contact_info">
          <div className="contact_card">
            <span>📞</span>
            <p>+91 8278602669</p>
          </div>

          <div className="contact_card">
            <span>📧</span>
            <p>
              <a href="mailto:MishraJanmejai11@gmail.com">
                MishraJanmejai11@gmail.com
              </a>
            </p>
          </div>

          <div className="contact_card">
            <span>💼</span>
            <p>
              <a
                href="https://www.linkedin.com/in/janmejai-mishra-b3762a1a8"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile
              </a>
            </p>
          </div>
        </div>

        <p className="footer_text">
          © {new Date().getFullYear()} Janmejai Mishra. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
    
}


// const ContactUs = () => {
//   return (
//     <footer className="contact_footer">
//       <div className="contact_container">

//         <h2 className="contact_heading">Contact Me</h2>
//         <p className="contact_subheading">
//           Feel free to reach out for collaborations or opportunities
//         </p>

//         <div className="contact_info">
//           <div className="contact_card">
//             <span>📞</span>
//             <p>+91 8278602669</p>
//           </div>

//           <div className="contact_card">
//             <span>📧</span>
//             <p>
//               <a href="mailto:MishraJanmejai11@gmail.com">
//                 MishraJanmejai11@gmail.com
//               </a>
//             </p>
//           </div>

//           <div className="contact_card">
//             <span>💼</span>
//             <p>
//               <a
//                 href="https://www.linkedin.com/in/janmejai-mishra-b3762a1a8"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 LinkedIn Profile
//               </a>
//             </p>
//           </div>
//         </div>

//         <p className="footer_text">
//           © {new Date().getFullYear()} Janmejai Mishra. All Rights Reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default ContactUs;
