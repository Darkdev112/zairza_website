import React,{useState} from 'react'
import "../../styles/common.style.scss";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import Card from '../../Components/Card/Card';

const Project = () => {
  const projectData = [
    // image resolution - 360 x 225 pixels
    // desc length - approx 50 words 
    {
      img: require("../../Assets/images/projects/wizer.png"),
      title: "Wizer",
      desc: "Wizer aspires to bring people together in the metaverse and give them an avatar-based experience that resembles physical purchasing. With the movement of the tech world towards Web 3.0, we believe that a metaverse-based e-commerce website can lead to a great user experience.",
      link: "/project-details/wizer"
    },
    {
      img: require("../../Assets/images/projects/harv.png"),
      title: "Harv",
      desc: "The proposed system aims to address the issue of untimely death of saplings planted across Odisha due to lack of care and maintenance. The system will monitor the growth of the planted saplings based on different parameters obtained through sensors and maintain a database to check the growth of the sapling regularly.",
      link: "/project-details/harv"
    },
    {
      img: require("../../Assets/images/projects/wizdom.png"),
      title: "Wizdom",
      desc: "Wizdom is a new mobile application that aims to make the journey of learning and education more straightforward. The app is specifically designed to help school and college tutors, as well as all educators who are willing to impart knowledge.We believe that we can make this process of gaining education even easier!",
      link: "/project-details/wizdom"
    },
    {
      img: require("../../Assets/images/projects/musicapp.png"),
      title: "Web Based Music App",
      desc: "The primary purpose of the music streaming application is to play music available in the databases of the service, compose custom playlists and suggest similar songs. Everyone likes to play songs and customize songs in their own way. This website overally gives all the features of a music app.",
      link: "/project-details/web-based-music-app"
    },
    {
      img: require("../../Assets/images/projects/aikyam.png"),
      title: "Aikyam",
      desc: "Educational institutions do not have the infrastructure to track their Alumni and facilitate alumni interaction. We have made a single platform AIKYAM in which both Alumni and students can register them connect with each other with many other unique features.Thus, it will effectively increase the interaction.",
      link: "/project-details/aikyam"
    },
    {
      img: require("../../Assets/images/projects/dostapp.jpeg"),
      title: "Dostapp",
      desc: "A mobile-platform for the NGOs to unite and display the animals available for adoption with detailed description of the respective ones with added pictures and videos which users can have a look with ease from the comfort of their homes.The users can contact the NGOs through the details provided to proceed for adoption.",
      link: "/project-details/dostapp"
    },
    {
      img: require("../../Assets/images/projects/voicegtpt.png"),
      title: "VoiceGTPT",
      desc: "This project is an AI-powered voice assistant app that was developed using the ChatGPT API and the flutter framework. The app allows users to interact with the system through voice input, which is then transcribed and sent to the ChatGPT API for processing. The API generates a response in text form.",
      link: "/project-details/voicegtpt"
    },
  ]

  const [searchProject, setSearchProject] = useState("");
  const [filteredProject, setFilteredProject] = useState(projectData);
  const handleSearchProjectChange = (e) => {
    setSearchProject(e.target.value);
  };
  const handleProjectFilter = (e) => {
    const newfilteredProject = projectData.filter((data) =>
      data.title.toLowerCase().includes(searchProject.toLowerCase())
    );
    setFilteredProject(newfilteredProject);
  }

  // const handleKeyPress = (event) => {
  //   if (event.key === 'Enter') {
  //     handleAchievementFilter();
  //   }
  // };

  return (
    <div className="event__container">
      <div className="project__top">
        <div className="project__title">
          <h1>Projects</h1>
        </div>
      </div>
      <div className="event__search__box">
        <div>
          <input
            type="text"
            className="event__search"
            placeholder="Search for any Project"
            value={searchProject}
            onChange={handleSearchProjectChange}
          />
        </div>
        <div className="event_btn_filter">
          <div className="event__btn">
            <button className="search-button-btn" onClick={handleProjectFilter}>Search</button>
          </div>
          <div className="event__filter">
            <p>Filter</p> <FilterAltOutlinedIcon />
          </div>
        </div>
      </div>
      <div className="event_card" style={{ marginBottom: "1rem" }} >
        {filteredProject.map((data, id) => {
          return <Card data={data} key={id} width="360px" height="auto" />
        })}
      </div>
    </div>
  );
}

export default Project