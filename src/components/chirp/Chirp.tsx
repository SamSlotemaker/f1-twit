import React from "react";
import "./style.scss";
import profileImage from "../../assets/images/profile.png";
import { Icon } from "../../components";

const Chirp = ({ children }: any) => {
  return (
    <article className="chirp">
      <h1>@Redbullfan_1827</h1>
      <img src={profileImage} className="chirp_profile-picture" alt="test" />
      <p className="chirp_text">
        What a great day for Red Bull today, Ford is more than welcome!
      </p>
      <button className="chirp_like-button">
        <Icon name="heart" />
      </button>
    </article>
  );
};

export default Chirp;
