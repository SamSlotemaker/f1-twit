import React, { useEffect, useState } from "react";
import "./style.scss";
import Page from "../page-wrapper";
import {
  MiddleContainer,
  Chirp,
  ChirpLoading,
  ErrorTryAgain,
} from "../../components";
import { endpoints } from "../../constants/eindpoints";

const FavoritesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [chirpsData, setChirpsData] = useState<any>([]);

  const getData = async () => {
    try {
      const response = await fetch(endpoints.tweets);
      const dataJSON = await response.json();
      setChirpsData(dataJSON);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const favoriteChirps = chirpsData.filter(
    (chirp: { id: number; text: string; username: string }) => chirp.id === 0
  );

  return (
    <Page>
      <MiddleContainer>
        <h1 className="favorites_page_heading">Favorites</h1>

        {isLoading && [...new Array(5)].map((k, i) => <ChirpLoading key={i} />)}

        {favoriteChirps &&
          !error &&
          favoriteChirps.length > 0 &&
          favoriteChirps.map((chirp: any) => (
            <Chirp key={chirp.id} data={chirp} />
          ))}

        {error && (
          <>
            <ErrorTryAgain tryAgainFunction={getData} />
          </>
        )}
      </MiddleContainer>
    </Page>
  );
};

export default FavoritesPage;
