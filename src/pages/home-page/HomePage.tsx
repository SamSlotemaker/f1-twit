import React from "react";
import "./style.scss";
import { Chirp, Icon, MiddleContainer } from "../../components";
import Page from "../page-wrapper";
import profileImage from "../../assets/images/profile.png";

const HomePage = () => {
  const newChirpPlaceholder = "What are your thoughts about the Ford deal?";
  return (
    <Page>
      <>
        <MiddleContainer>
          <form className="chirps_container_new-chirp">
            <textarea
              rows={4}
              placeholder={newChirpPlaceholder}
              maxLength={140}
            />
            <button className="chirps_container_new-chirp_submit-button">
              Chirp
            </button>
          </form>

          <Chirp />
          <Chirp />
          <Chirp />
          <Chirp />
          <Chirp />
          <Chirp />

          <div className="chirps_overflow-glow"></div>
        </MiddleContainer>
      </>
    </Page>
  );
};

export default HomePage;
