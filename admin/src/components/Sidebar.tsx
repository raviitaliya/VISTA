import React from 'react'
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { HomeIcon } from 'lucide-react';

const Sidebar = () => {
  return (
    <div>
      <div className=" p-4 font-['Bodoni_Moda_SC',_serif] font-medium ">
        <h1 className="text-4xl">VISTA</h1>
      </div>

      <div className='flex flex-col gap-2'>
        <SidebarNavLink path="/" icon={<HomeIcon size={18} />} label="Home" />
        <SidebarNavLink path="/" icon={<HomeIcon size={18} />} label="Home" />
        <SidebarNavLink path="/" icon={<HomeIcon size={18} />} label="Home" />
        <SidebarNavLink path="/" icon={<HomeIcon size={18} />} label="Home" />
        <SidebarNavLink path="/" icon={<HomeIcon size={18} />} label="Home" />
        <SidebarNavLink path="/" icon={<HomeIcon size={18} />} label="Home" />
        <SidebarNavLink path="/" icon={<HomeIcon size={18} />} label="Home" />
        <SidebarNavLink path="/" icon={<HomeIcon size={18} />} label="Home" />
        <SidebarNavLink path="/" icon={<HomeIcon size={18} />} label="Home" />
      </div>
    </div>
  )
}


function SidebarNavLink({ path, icon, label }: { path: string, icon: React.ReactNode, label: string }) {
  return (
    <Link to={path}>
      <Button variant={"ghost"}>
        <div className="flex gap-2 j items-center">
          {icon}
          <p className="text-sm">{label}</p>
        </div>
      </Button>
    </Link>
  );
}

export default Sidebar