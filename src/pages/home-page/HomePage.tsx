import React, { useEffect, useState } from "react";
import { endpoints } from "../../constants/eindpoints";
import "./style.scss";
import {
  ChirpLoading,
  MiddleContainer,
  ErrorTryAgain,
  ChirpList,
} from "../../components";
import Page from "../page-wrapper";

const HomePage = () => {
  const newChirpPlaceholder = "What are your thoughts about the Ford deal?";

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [chirpsData, setChirpsData] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(endpoints.tweets);
      const dataJSON = await response.json();
      setChirpsData(dataJSON);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getData();
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

          {!error && chirpsData && <ChirpList chirps={chirpsData} />}

          {!error && <div className="chirps_overflow-glow"></div>}

          {error && (
            <>
              <ErrorTryAgain tryAgainFunction={getData} />
            </>
          )}
        </MiddleContainer>
      </>
    </Page>
  );
};

export default HomePage;
