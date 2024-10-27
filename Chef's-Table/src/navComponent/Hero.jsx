const Hero = () => {
    return (
      <div className="hero w-11/12 mx-auto">
        <div
          className=" hero-content flex flex-col relative hero bg-cover bg-no-repeat object-contain rounded-3xl md:w-full  md:h-[28.5rem] lg:h-[35rem] mb-10"
          style={{
            backgroundImage: `linear-gradient( to right, rgba(0,0,0,.6),rgba(0,0,0,0.3),rgba(0,0,0,0.5)), url('https://i.ibb.co.com/thR2kz8/cooking-Banner.jpg')`,
          }}
        >
          <div className=" text-center  text-white">
            <div className="w-8/12 mx-auto">
              <h1 className="text-4xl font-bold">
                Discover an exceptional cooking class tailored for you!
              </h1>
              <p className="py-6">
                Food brings people together and allows for endless culinary
                exploration, whether at home or in professional kitchens.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 md:gap-8 lg:gap-12">
            <button className="btn btn-success rounded-2xl text-white text-lg">
              Explore Now
            </button>
            <button className="btn hidden md:flex rounded-2xl bg-gray-300">Our Feedback</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;
  