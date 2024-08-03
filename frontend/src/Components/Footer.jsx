import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  PinterestLogo,
} from "@phosphor-icons/react";

function Footer() {
  return (
    <div className="h-[250px] ">
      <div className="px-[16%] ">
        <div className="py-9 flex items-center gap-20">
          <div className="font-['Bodoni_Moda_SC',_serif] font-medium ">
            <h1 className="text-4xl">VISTA</h1>
          </div>

          <div className="flex justify-between w-full font-semibold">
            <a href="#">For designers</a>
            <a href="#">Hire talent</a>
            <a href="#">Inspiration</a>
            <a href="#">Advertising</a>
            <a href="#">Blog</a>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Support</a>
          </div>
          <div className="flex gap-2">
            <FacebookLogo size={24} weight="fill" />
            <InstagramLogo size={24} />
            <TwitterLogo size={24} weight="fill" />
            <PinterestLogo size={24} weight="fill" />
          </div>
        </div>
        <div className="pt-12 flex items-center justify-between gap-20">
          <div className="text-gray-500 flex  gap-5">
            <a>© 2024 Dribbble</a>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Cookies</p>
          </div>

          <div className="text-gray-500 flex  gap-5">
            <p>Jobs</p>
            <p>Designers</p>
            <p>Freelancers</p>
            <p>Tags</p>
            <p>Places</p>
            <p>Resources</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
