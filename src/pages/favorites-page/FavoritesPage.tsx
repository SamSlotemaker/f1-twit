import React from "react";
import "./style.scss";
import Page from "../page-wrapper";
import { MiddleContainer, Chirp } from "../../components";

const FavoritesPage = () => {
  return (
    <Page>
      <MiddleContainer>
        <h1 className="favorites_page_heading">Favorites</h1>
        {/* <Chirp /> */}
      </MiddleContainer>
    </Page>
  );
};

export default FavoritesPage;
