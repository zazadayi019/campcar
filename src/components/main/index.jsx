import React from "react";
import CarouselComponent from "./carousel";
import RekommendComponent from "./rekommend";
import VideosComponent from "./videos";
import BlogsComponent from "./blogs";

const MainPage = () => {
  return (
    <div>
      <CarouselComponent />
      <RekommendComponent />
      <VideosComponent />
      <BlogsComponent />
    </div>
  );
};

export default MainPage;
