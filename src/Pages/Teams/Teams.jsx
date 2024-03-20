import React from 'react'
import "../../styles/common.style.scss";
import Card from '../../Components/Card/Card'
import teamData from "./teamJSON"

const Teams = () => {
         
    return (
        <div className='event__container'>
            <div className="alumni_top_box">
                <h1 className="alumni_heading">Lets Meet Our Teams</h1>
                <p className='alumni_para'>
                Welcome to the heart of our organization—our incredible team! Behind every success story and every milestone achieved, there's a group of passionate individuals working together, bringing diverse skills, creativity, and dedication to the table. We take great pride in introducing you to the dynamic personalities that form the backbone of our company.
Whether you're a valued client, a prospective partner, or simply someone curious about the people who drive our success, this page serves as a window into the talent, passion, and commitment that define our team. Join us on this virtual journey as we introduce you to the individuals who make up the fabric of our organization, shaping its character and contributing to its success.
                </p>     
            </div>
            <div className="alumni_card">
            {teamData.map((details,id)=>{
                return <Card data={details} key={id} width="270px" alumniBackground="#00255C" borderBottomLeft="none" borderBottomRight="none" alumniColor="white" />
            })}
            </div>
        </div>
      )
}

export default Teams

