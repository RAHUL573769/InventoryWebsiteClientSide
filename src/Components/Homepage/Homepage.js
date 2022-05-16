import React from "react";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Feedback from "../Customer's Feedback/Feedback";
import Inventorie from "../Inventories/Inventorie";
import Opening from "../OpeningHours/Opening";

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>

      <Inventorie></Inventorie>

      <Opening></Opening>
      <Feedback></Feedback>
    </div>
  );
};

export default Homepage;
