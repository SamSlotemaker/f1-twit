import React from "react";
import "./style.scss";

import home from "../../assets/icons/home.png";
import heart from "../../assets/icons/heart.svg";
import user from "../../assets/icons/user.png";
import notification from "../../assets/icons/notification.png";

const Icon = ({ name }: any) => {
  const images: any = {
    home: home,
    heart: heart,
    user: user,
    notification: notification,
  };

  const image = images[name];

  return <img className="icon" src={image} alt={name}></img>;
};

export default Icon;
