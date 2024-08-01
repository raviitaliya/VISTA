import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  PinterestLogo,
} from "@phosphor-icons/react";

function Footer() {
  return (
    <div className="h-[250px] ">
        <div className="px-[15%] ">

      <div className="py-10  flex items-center gap-20">
        <div className="font-['Bodoni_Moda_SC',_serif] font-medium ">
          <h1 className="text-4xl">VISTA</h1>
        </div>

        <div className="flex justify-between w-full font-semibold">
          <p>For designers</p>
          <p>Hire talent</p>
          <p>Inspiration</p>
          <p>Advertising</p>
          <p>Blog</p>
          <p>About</p>
          <p>Careers</p>
          <p>Support</p>
        </div>
        <div className="flex gap-2">
          <FacebookLogo size={24} weight="fill" />
          <InstagramLogo size={24} />
          <TwitterLogo size={24} weight="fill" />
          <PinterestLogo size={24} weight="fill" />
        </div>
      </div>
        </div>
    </div>
  );
}

export default Footer;
