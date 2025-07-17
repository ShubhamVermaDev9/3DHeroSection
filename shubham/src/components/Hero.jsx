import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <main className="relative flex flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)] lg:mt-20 overflow-hidden">
      
      {/* Text Content */}
      <div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
        
        {/* Gradient Tag */}
        <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
            <i className="bx bx-diamond text-white text-sm"></i>
            <span className="text-white text-xs font-medium">INTRODUCING</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
          EMAIL FOR <br />
          DEVELOPERS
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base max-w-lg">
          The best way to reach humans instead of spam folders.  
          Deliver transactional and marketing emails reliably.
        </p>
      </div>

      {/* Spline 3D Visual */}
      <Spline
        className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full w-full"
        scene="https://prod.spline.design/7hLSB5bjv477x1rm/scene.splinecode"
      />
    </main>
  );
};

export default Hero;