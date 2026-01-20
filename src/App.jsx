import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";


import Mainpage from "./Components/Main_page";
import { Project } from "./Components/Project";
import { ContactUs } from "./Components/Contactus";

function App() {
  return (<>
      <Header />
    

      <Routes>
        <Route path="/" element={<Mainpage />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} /> */}
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
   
        </>
  );
}

export default App;
