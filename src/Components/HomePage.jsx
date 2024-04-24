// eslint-disable-next-line no-unused-vars
import React from "react";
import bg from "../assets/bg.png";
import Button from "./Button";

function HomePage() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "calc(100vh - 96px)", // Ensure there's a space before and after the subtraction operator
      }}
    >
      <Button />
      <div className="flex justify-center text-center pt-12 px-[500px]">
      <h1 className="text-white text-4xl font-medium">{`Explore the world's leading design portfolios`}</h1>
      </div>
      <div className="flex justify-center text-center pt-10 px-[440px]">
      <h1 className="text-white text-base font-normal">{`Millions of designers and agencies around the world showcase their portfolio work on Dribbble - the home to the world's best design and creative professionals.`}</h1>
      </div>
      <div className="flex justify-center pt-8">
        <input className="w-[600px] h-[50px] rounded-3xl px-5 bg-gray-200" type="text" placeholder={"search..."}/> 
      </div>
      <div className="flex justify-center pt-12 items-center">
        <p className="text-white mr-4">Trending searches</p>
        <Button display="true"/>
      </div>

    </div>
  );
}

export default HomePage;
