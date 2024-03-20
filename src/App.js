import React from 'react';
import {Route,Routes} from "react-router-dom";
import Main from "./Pages/Main/Main";
import Achievements from "./Pages/Achievements/Achievement";
import Faq from "./Pages/Faq/Faq";
import Domains from "./Pages/Domains/Domain";
import Navbar from './Components/Navbar/Navbar';
import Footer from "./Components/Footer/Footer";
import Event from './Pages/Event/Event';
import EventDetails from "./Pages/Eventudp/Eventudp";
import Blog from './Pages/Blogs/Blog';
import Project from './Pages/Project/Project';
import Teams from "./Pages/Teams/Teams";
import Alumni from "./Pages/Alumni/Alumni";
import AboutUs from './Pages/AboutUs/AboutUs';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BlogDetails from './Pages/Blogs/BlogDetails';
import ProjectDetails from './Pages/Project/ProjectDetails';
// import Login from './Pages/LogIn/Login';
// import Signup from './Pages/LogIn/Signup';


function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }
  return (
    <div className="App">
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/domains" element={<Domains />} />
        <Route path="/projects" element={<Project/>} />
        <Route path="/project-details/:name" element={<ProjectDetails/>} />
        <Route path="/teams" element={<Teams/>} />
        <Route path="/alumni" element={<Alumni/>} /> 
        <Route path="/blogs" element={<Blog/>} />
        <Route path="/blog-details" element={<BlogDetails/>} />
        <Route path="/events" element={<Event/>} />
        <Route path="/events/:event_id" element={<EventDetails/>} />
        <Route path="/about" element={<AboutUs/>} />
     
        {/* <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
