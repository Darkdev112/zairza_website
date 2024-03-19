import { useParams } from 'react-router-dom';
import { useState } from 'react';

import './eventudp.scss';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Eventudp = () => {

    const [event,setEvent] = useState();

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

    const {event_id} = useParams();
    console.log(event_id[0]);
    if(event_id[0]==='p'){
        const e_data = pastEventData.find(e=>e.id===event_id);
        setEvent(e_data);
    }
    else if(event_id[0]==='u'){
        const e_data = upcomingEventData.find(e=>e.id===event_id);
        setEvent(e_data);
    }

    return (
        <>
            <div className="eudp">
                <div className="eudp_top">
                    <div className="eudp_titles">
                        <h1 className="event_title">jdfjfbbfdd</h1>
                        <div className="date_time">
                            <p>5th May, 2022</p>
                            <p className='eudp_dot' >.</p>
                            <p>12:30 AM</p>
                        </div>
                    </div>
                </div>
                <div className="eudp_mid">
                    <div className="abtEvent">
                        <h3>All About The Event</h3>
                        <div className="eveDesc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis pariatur possimus repellat fugit omnis dignissimos quo alias, esse aliquam? Eos animi harum fugit blanditiis ducimus, nostrum dignissimos quos? Consequuntur, sit nam! Facere sapiente vitae doloremque corporis, voluptas consequatur officia dolor ab nesciunt corrupti nulla recusandae maiores veritatis quas quibusdam vel!
                        </div>
                        <div className="dateTimeVenue">
                            <p><span className='dt' ><EventIcon style={{ width: "14px", height: "14px" }} />&nbsp;Date: </span>5th May, 2022</p>
                            <p><span className='dt' ><AccessTimeIcon style={{ width: "14px", height: "14px" }} />&nbsp;Time: </span>12:30 AM</p>
                            <p><span className='dt' ><LocationOnOutlinedIcon style={{ width: "14px", height: "14px" }} />&nbsp;Venue: </span>Zairza Club</p>
                        </div>
                        <div className="preLink">
                            <a href="/">Click to Download the Pre-requisites for the event</a>
                        </div>
                    </div>
                    <div className="regibtn">
                        <button className="eudpRegBtn">Click here to register</button>
                    </div>
                </div>
                <div className="eudp_end"></div>
            </div>
        </>
    )
}

export default Eventudp