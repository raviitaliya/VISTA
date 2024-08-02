import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full h-24">
      <div className="flex items-center h-full px-14 text-base font-medium gap-10 text-black">
        <a href="#" className="text-">
          Find talent
        </a>
        <a href="#" className="text-">
          For designers
        </a>
        <a href="#" className="text-">
          Inspiration
        </a>
        <a href="#" className="text-">
          Learn design
        </a>
      </div>
      <div className="font-['Bodoni_Moda_SC',_serif] font-medium font-optical-sizing-auto text-center absolute left-1/2 transform -translate-x-1/2">
        <h1 className="text-5xl">VISTA</h1>
      </div>
      <div className="flex items-center h-full p-5 text-base">
        <Link to="/login" className="font-medium">
          Log in
        </Link>
        <Link to="/signup" className="px-5 py-2 bg-black text-white font-semibold rounded-md flex items-center justify-center ml-8">
          Sign up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;