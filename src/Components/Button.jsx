import React from "react";

function Button() {
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

  return (
    <>
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
    </>
  );
}

export default Button;
