import React, { useEffect } from "react";
import "./style.scss";
import { Icon } from "..";

interface iProps {}

const ChirpLoading: React.FC<iProps> = () => {
  return (
    <article className="chirp-loading">
      <div className="chirp-loading_heading"></div>
      <div className="chirp-loading_profile-picture" />
      <p className="chirp-loading_text"></p>
      <button className="chirp-loading_like-button">
        <Icon name="heart" />
      </button>
    </article>
  );
};

export default ChirpLoading;
