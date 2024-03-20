import React from "react";
import "./Card.scss";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HistoryToggleOffSharpIcon from "@mui/icons-material/HistoryToggleOffSharp";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import {useNavigate} from 'react-router-dom'

const Card = ({ data,width,height,alumniBackground,alumniColor}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if(data.link){
      navigate(data.link);
    } 
  }
  return (
    <div className="card__container" style={{width:width, height: height?height : "auto"}} onClick={handleClick}>
      <div className="card__image__box">
        <img className="card__image" src={data.img} alt=""/>
      </div>
      <div className="card__content" style={{backgroundColor:alumniBackground,color:alumniColor}} >
        <div className="card__title">{data.title}</div>
        <div className="card__desc_box">
          <div className="card__desc">{data.desc ? data.desc.substring(0,79) : ""}</div>
          {data.detailNo && (
            <div className="card__desc_icon">
              <MailOutlineRoundedIcon style={{color:"white"}} />
            </div>
          )}
        </div>

        {data.date && data.time && data.place && (
          <div className="card__dtp">
            <div className="card__dtp_item">
              <CalendarMonthIcon className="card__dtp_icon" />
              <p>{data.date}</p>
            </div>
            <div className="card__dtp_item">
              <HistoryToggleOffSharpIcon className="card__dtp_icon" />
              <p>{data.time}</p>
            </div>
            <div className="card__dtp_item">
              <PinDropOutlinedIcon className="card__dtp_icon" />
              <p>{data.place}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
