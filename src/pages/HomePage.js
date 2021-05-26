import React from "react";

import photo from "../img/homePageImg.jpg";

const HomePage = () => {
  return (
    <>
      <div className="relative text-center">
        <img className="bg-cover " src={photo} alt="" />
        <div className="absolute top-1/4 ">
          <h1>Here in PHONEBOOK, we have all the contacts that you need</h1>
        </div>
      </div>
    </>
  );
};

export default HomePage;
