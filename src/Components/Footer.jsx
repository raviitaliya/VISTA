import logo from '../assets/logo.svg'

function Footer() {
  return <footer>
    <div className='flex pb-14'>

    <div className='pl-16 w-80 pt-10'>
    <img className='w-32' src={logo} alt='logo' />
    <p>Dribble is the worlds leading community for creatives to shere,grow and hierd.</p>
    </div>

    <div className='flex text-sm pt-8'>
    <div className='pl-14 pt-10'>
    <ul>
        <li className='font-bold mb-3'>For designers</li>
        <li className='mb-3'>Explore design work</li>
        <li className='mb-3'>Design block</li>
        <li className='mb-3'>Overtime product</li>
        <li className='mb-3'>Playoff</li>
        <li className='mb-3'>Code of conduct</li>
    </ul>
    </div>

    <div className='pl-14 pt-10'>
    <ul>
        <li className='font-bold mb-3'>Hire designing</li>
        <li className='mb-3'>Post a job opening</li>
        <li className='mb-3'>Post a freelance project</li>
        <li className='mb-3'>search for designers</li>
        <li className='mb-3'>Brands</li>
        <li className='mb-3'>Advertise with us</li>
    </ul>
    </div>

    <div className='pl-14 pt-10'>
    <ul>
        <li className='font-bold mb-3'>Company</li>
        <li className='mb-3'>About</li>
        <li className='mb-3'>Carseers</li>
        <li className='mb-3'>Support</li>
        <li className='mb-3'>Media kit</li>
        <li className='mb-3'>Testimonials</li>
        <li className='mb-3'>API</li>
        <li className='mb-3'>tearm of service</li>
        <li className='mb-3'>Privacy policy</li>
        <li className='mb-3'>cookie policy</li>
    </ul>
    </div>

    <div className='pl-14 pt-10'>
    <ul>
        <li className='font-bold mb-3'>Directories</li>
        <li className='mb-3'>Design jobs</li>
        <li className='mb-3'>Designers for hire</li>
        <li className='mb-3'>Freelance designers for hire</li>
        <li className='mb-3'>Tags</li>
        <li className='mb-3'>Places</li>
        <li className='mb-3'>Design assets</li>
        <li className='mb-3'>Creative Market</li>
        <li className='mb-3'>Fontspring</li>
        <li className='mb-3'>Font Squirrel</li>
    </ul>
    </div>

    <div className='pl-14 pt-10 mr-16'>
    <ul> 
        <li className='font-bold mb-3'>Design Resources</li>
        <li className='mb-3'>Freelancing</li>
        <li className='mb-3'>Design Hiring </li>
        <li className='mb-3'>Design Portfolio</li>
        <li className='mb-3'>Design Education</li>
        <li className='mb-3'>Design Industry</li>
    </ul>
    </div>
    </div>
    </div>
  </footer>
}

export default Footer;
