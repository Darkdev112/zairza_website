import React from "react";
import "../../styles/common.style.scss";

import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import Card from "../../Components/Card/Card";

const Event = () => {
  const upcomingEventData = [
    {
      id: "u1",
      img: require("../../Assets/images/card/c-1.png"),
      title: "Perception",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, fugased. Aliquam.",
      date: "20th March 2024",
      time: "--/--",
      place: "Zairza",
    },
    {
      id: "u2",
      img: require("../../Assets/images/card/c-2.png"),
      title: "Skills++",
      desc: "It is 1.5-month upskilling program conducted by Zairza every year (for last 6 years) for the students.",
      date: "--/--/--",
      time: "--:--",
      place: "Zairza",
    },
  ];

  const pastEventData = [
    {
      id: "p1",
      img: require("../../Assets/images/card/c-1.png"),
      title: "Skills++",
      desc: "It is 1.5-month upskilling program conducted by Zairza every year (for last 6 years) for the students.",
    },
    {
      id: "p2",
      img: require("../../Assets/images/card/c-2.png"),
      title: "GSW Sessions",
      desc: "This was a set of 16 exclusive introductory sessions conducted for the first years, where they were introduced into various domains.",
    },
    {
      id: "p3",
      img: require("../../Assets/images/card/c-3.png"),
      title: "Zairzest 3.0",
      desc: "It is the highly anticipated annual tech fest brought to you by Zairza.",
    },
  ];

  return (
    <div className="event__container">
      <div className="event__top">
        <div className="event__title">
          <h1>Events</h1>
        </div>
      </div>
      <div className="event__search__box">
        <div>
          <input
            type="text"
            className="event__search"
            placeholder="Search for any event"
          />
        </div>
        <div className="event_btn_filter">
          <div className="event__btn">
            <button className="search-button-btn">Search</button>
          </div>
          <div className="event__filter">
            <p>Filter</p> <FilterAltOutlinedIcon />
          </div>
        </div>
      </div>
      <div className="events_heading_box">
        <h1 className="events_heading">Upcoming Events</h1>
      </div>
      <div className="event_card">
        {upcomingEventData.map((data, id) => {
          return <Card data={data} key={id} width="360px" />;
        })}
      </div>
      <div className="events_heading_box" style={{ marginTop: "1rem" }}>
        <h1 className="events_heading">Past Events</h1>
      </div>
      <div className="event_card" style={{ marginBottom: "1rem" }}>
        {pastEventData.map((data, id) => {
          return <Card data={data} key={id} width="360px" height="360px" />;
        })}
      </div>
    </div>
  );
};

export default Event;
