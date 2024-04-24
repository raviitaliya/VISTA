import React from "react";

// eslint-disable-next-line react/prop-types
function Button({ display }) {
  const buttonObj = [
    {
      name: "Discover",
    },
    {
      name: "Animation",
    },
    {
      name: "Branding",
    },
    {
      name: "Mobile",
    },
    {
      name: "Print",
    },
    {
      name: "Product Design",
    },
    {
      name: "Typography",
    },
    {
      name: "Web Design",
    },
  ];

  const trending = [
    {
      name: "Landing page",
    },
    {
      name: "Ios",
    },
    {
      name: "food",
    },
    {
      name: "ux design",
    },
    {
      name: "app design",
    },
  ];

  return (
    <>
      {display === "true" ? (
        <div className="flex justify-center ">
          {trending.map((value) => (
            <button
              className="text-white  border-solid border-2 border-white rounded-[40px] px-8 py-2 mx-2 "
              key={value.name}
            >
              {value.name}
            </button>
          ))}
        </div>
      ) : (
        <div className="flex justify-center pt-12">
          {buttonObj.map((value) => (
            <button
              className="text-white bg-black rounded-3xl px-8 py-3.5 m-2 "
              key={value.name}
            >
              {value.name}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export default Button;
