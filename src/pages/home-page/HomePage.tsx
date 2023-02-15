import React, { useEffect, useState } from "react";
import "./style.scss";
import { Chirp, ChirpLoading, MiddleContainer } from "../../components";
import Page from "../page-wrapper";

const HomePage = () => {
  const newChirpPlaceholder = "What are your thoughts about the Ford deal?";

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

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

          {isLoading &&
            [...new Array(5)].map((k, i) => <ChirpLoading key={i} />)}
          {!isLoading && [...new Array(5)].map((k, i) => <Chirp key={i} />)}

          {/* <Chirp />
          <Chirp />
          <Chirp />
          <Chirp />
          <Chirp />
          <Chirp /> */}

          <div className="chirps_overflow-glow"></div>
        </MiddleContainer>
      </>
    </Page>
  );
};

export default HomePage;
