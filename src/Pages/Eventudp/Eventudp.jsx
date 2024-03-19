import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './eventudp.scss';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Eventudp = () => {

    const [event,setEvent] = useState(
        {
            id: "perception",
            img: require("../../Assets/images/card/c-1.png"),
            title: "Perception",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, fugased. Aliquam.",
            date: "20th March 2024",
            time: "--/--",
            place: "Zairza",
        }
    );

    const events = [
        {
            id: "perception",
            img: require("../../Assets/images/card/c-1.png"),
            title: "Perception",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, fugased. Aliquam.",
            date: "20th March 2024",
            time: "--/--",
            place: "Zairza",
        },
        {
            id: "skills++",
            img: require("../../Assets/images/card/c-2.png"),
            title: "Skills++",
            desc: "It is 1.5-month upskilling program conducted by Zairza every year (for last 6 years) for the students. The students are given tasks weekly in multiple domains. By the end of the program, the students who have completed the set of tasks are well versed in the domain and have a project ready with them.",
            date: "--/--/--",
            time: "--:--",
            place: "Zairza",
        },
        {
            id: "oskill",
            img: require("../../Assets/images/card/c-1.png"),
            title: "Skills++",
            desc: "It is 1.5-month upskilling program conducted by Zairza every year (for last 6 years) for the students. The students are given tasks weekly in multiple domains. By the end of the program, the students who have completed the set of tasks are well versed in the domain and have a project ready with them.",
        },
        {
            id: "gsw",
            img: require("../../Assets/images/card/c-2.png"),
            title: "GSW Sessions",
            desc: "This was a set of 16 exclusive introductory sessions conducted for the first years, where they were introduced into various domains (like development, design, robotics, aiml, devops, etc. ) and we're guided about how to get started with the respective domains.",
        },
        {
            id: "z3",
            img: require("../../Assets/images/card/c-3.png"),
            title: "Zairzest 3.0",
            desc: "It is the highly anticipated annual tech fest brought to you by Zairza. This exhilarating event serves as a melting pot of technological innovation, where participants meet to compete, collaborate, and showcase their remarkable talents. Throughout the fest, our club organizes a wide array of tech-related competitions that challenge participants to push their boundaries and exhibit their skills in areas such as coding, artificial intelligence, cybersecurity, and data science. The event also includes various fun events which tests participants' problem solving and creative skills.",
        },
    ];

    const params = useParams();
    
    const e_data = events.find(e=>e.id===params.event_id)
    useEffect(() => {
        setEvent(e_data);
    }, [e_data])
    
    

    return (
        <>
            <div className="eudp">
                <div className="eudp_top">
                    <div className="eudp_titles">
                        <h1 className="event_title">{event.title}</h1>
                        {
                            event.time &&
                            <div className="date_time">
                            <p>{event.date}</p>
                            <p className='eudp_dot' >.</p>
                            <p>{event.time}</p>
                        </div>
                        }
                    </div>
                </div>
                <div className="eudp_mid">
                    <div className="abtEvent">
                        <h3>All About The Event</h3>
                        <div className="eveDesc">
                            {event.desc}
                        </div>
                        {
                            event.time &&
                            <div className="dateTimeVenue">
                            <p><span className='dt' ><EventIcon style={{ width: "14px", height: "14px" }} />&nbsp;Date: </span>{event.date}</p>
                            <p><span className='dt' ><AccessTimeIcon style={{ width: "14px", height: "14px" }} />&nbsp;Time: </span>{event.time}</p>
                            <p><span className='dt' ><LocationOnOutlinedIcon style={{ width: "14px", height: "14px" }} />&nbsp;Venue: </span>{event.place}</p>
                        </div>
                        }
                        <div className="preLink">
                            {
                                event.time && <a href="/">Click to Download the Pre-requisites for the event</a>
                            }
                        </div>
                    </div>
                    <div className="regibtn">
                        {
                            event.time && <button className="eudpRegBtn">Click here to register</button>
                        }
                    </div>
                </div>
                <div className="eudp_end"></div>
            </div>
        </>
    )
}

export default Eventudp