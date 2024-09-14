import Slider from "../Components/Slider";
import Post from "../Components/Post"
import { useNavigate } from "react-router-dom";

const FristPage = () => {
  const navigate = useNavigate();
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
          <Post img={"https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"}/>
          <Post img={"https://images.unsplash.com/photo-1721934081906-a92cdc010b75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"}/>
          <Post img={"https://plus.unsplash.com/premium_photo-1722081393586-e3a0c12535b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"}/>
          <Post img={"https://images.unsplash.com/photo-1721633616323-e0ea74a488e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"}/>
          <Post img={"https://images.unsplash.com/photo-1721633616323-e0ea74a488e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"}/>
          <Post img={"https://images.unsplash.com/photo-1721633616323-e0ea74a488e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"}/>
          <Post img={"https://images.unsplash.com/photo-1721633616323-e0ea74a488e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"}/>
          <Post img={"https://images.unsplash.com/photo-1721633616323-e0ea74a488e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"}/>
          <Post img={"https://images.unsplash.com/photo-1721633616323-e0ea74a488e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"}/>
          <Post img={"https://images.unsplash.com/photo-1721633616323-e0ea74a488e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"}/>
          <Post img={"https://images.unsplash.com/photo-1721633616323-e0ea74a488e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"}/>
          <Post img={"https://images.unsplash.com/photo-1721633616323-e0ea74a488e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"}/>

        </div>
      </div>
  );
};

export default FristPage;
