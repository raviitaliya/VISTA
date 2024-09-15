import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../store/store";

function Navbar() {

  const { user } = useUserStore();

  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center w-full h-24">
      <div className="flex items-center h-full px-14 text-base font-medium gap-10 text-black">
        <Link to="/home" className="text-">
          Home
        </Link>
        <Link to="/following" className="text-">
          For designers
        </Link>
        <Link to="/editor" className="text-">
          Create yours
        </Link>
        <Link to="/about" className="text-">
          about
        </Link>
      </div>
      <div className="font-['Bodoni_Moda_SC',_serif] font-medium font-optical-sizing-auto text-center absolute left-1/2 transform -translate-x-1/2">
        <h1 className="text-5xl">VISTA</h1>
      </div>
      <div className="flex items-center h-full p-5 text-base">
       <img onClick={() => navigate("/profile")} src={user?.avatar || "/image.png"} className='rounded-full w-10 h-10  mr-2' />
      </div>
    </nav>
  );
}

export default Navbar;