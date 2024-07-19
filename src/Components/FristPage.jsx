import Slider from "./Slider";

const FristPage = () => {
  return (
    <div className="h-screen w-full">
      <div className="flex justify-center pt-32 pb-20 items-center">
        <div className="text-center">
          <h1 className="capitalize text-6xl font-normal">
            The world’s destination
          </h1>
          <h1 className="capitalize text-6xl font-normal mt-4">for design</h1>
          <p className="py-9 text-xl">
            Get inspired by the work of millions of top-rated designers &
            agencies around the world.
          </p>
          <button className=" bg-black text-white px-10 py-4 rounded-3xl">
            Get started
          </button>
        </div>
      </div>

      <div className="w-full gap-7 flex justify-center">
        {/* <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/> */}
        <Slider/>

      </div>
    </div>
  );
};

export default FristPage;
