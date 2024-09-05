import React from "react";
import { MainCon } from "./style";
import WallpaperComponent from "./wallpaper";
import DataComponent from "./data";
import AidalNavbar from "./aidalnavbar";
import AidalBotCon from "./aidalbotcon";
import ItemReviews from "./aidalbotpages/itemreviews";

const ItemReviewsComponent = () => {
  return (
    <MainCon>
      <WallpaperComponent />
      <DataComponent />
      <AidalNavbar />
      <AidalBotCon />
      <ItemReviews />
    </MainCon>
  );
};

export default ItemReviewsComponent;
