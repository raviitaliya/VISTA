import Slider from "../Components/Slider";
import Post from "../Components/Post"
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../store/store";
import { useEffect } from "react";

const FristPage = () => {
  const navigate = useNavigate();



  
  const { getAllContent, allcontentItems } = useUserStore();

  useEffect(() => {
    getAllContent();
  }, []);



  return (
    <div className="h-full w-full">
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
          <button onClick={() => navigate("/following")} className=" bg-black text-white px-10 py-4 rounded-3xl">
            Get started
          </button>
        </div>
      </div>
      <div className="w-full gap-7 flex justify-center">
        <Slider />
      </div>

      <div className="pt-28 pb-10 w-full text-center">
        <h2 className="text-5xl">Explore inspiring designs</h2>
      </div>

      <div className=" flex-wrap justify-center  flex gap-10">
        <div className="flex flex-wrap justify-center w-[99%] gap-10">
          {allcontentItems.map((item) => (
            <Link to={`/display/${item._id}`} key={item._id} >
              <Post key={item._id} img={item.img[0]} name={item.title} avatar={item.avatar} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FristPage;
