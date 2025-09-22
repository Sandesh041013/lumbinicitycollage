import Image from "next/image";

export default function Landingabout() {
  const timeline = [
    {
      id: 1,
      text: (
        <>
          Established in <b>2000 A.D.</b> as Lumbini Engineering College (LEC).
        </>
      ),
    },
    {
      id: 2,
      text: "Founded with the vision of experienced educators committed to modern, scientific, and technical education.",
    },
    {
      id: 3,
      text: "Mission: Decentralize engineering education and reduce the need for students to go abroad for technical studies.",
    },
    {
      id: 4,
      text: (
        <>
          Expanded academically to establish{" "}
          <b>Lumbini Engineering Management & Science College (LEMSC)</b>,
          affiliated with Pokhara University, offering Bachelor's and Master's
          level engineering programs.
        </>
      ),
    },
    {
      id: 5,
      text: "The original LEC continues to run diploma-level programs under CTEVT affiliation.",
    },
  ];

  const stats = [
    {
      icon: "👥",
      number: "25+",
      title: "Years of Excellence",
      description: "Serving education since 2000"
    },
    {
      icon: "🎓",
      number: "5000+",
      title: "Graduates",
      description: "Successful professionals worldwide"
    },
    {
      icon: "🏆",
      number: "ISO 9001:2015",
      title: "Certified",
      description: "International quality standards"
    },
    {
      icon: "💡",
      number: "10+",
      title: "Programs",
      description: "Diverse academic offerings"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto gap-16 items-start">
        {/* Heading */}
        <div className="mb-12 text-center w-full">
          <span className="px-5 py-1 text-sm font-medium bg-rose-100 text-rose-600 rounded-full inline-block">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-5 leading-snug">
            Leading <span className="text-rose-600">Engineering Education</span>
          </h2>
          <p className="mt-5 text-gray-600 leading-relaxed max-w-2xl mx-auto">
            As the first and only engineering college in Rupandehi district, we
            pioneer technical education and scientific innovation, empowering
            students to lead in the global arena.
          </p>
        </div>

        {/* Timeline + Image */}
        <div className="flex flex-col-reverse md:flex-row gap-12">
          {/* Timeline */}
          <div className="md:flex-1">
            <div className="flex flex-col gap-12 relative">
              {/* Main vertical line that connects all circles */}
              <div className="absolute left-4 top-6 bottom-13 mt-2 w-0.5 bg-gray-300"></div>
                             
              {timeline.map((item, index) => (
                <div key={item.id} className="flex items-start gap-4 relative">
                  {/* Number Circle */}
                  <div className="flex-shrink-0 z-10">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#0044B3] text-sm bg-[#0846AA1A] text-[#0044B3] font-bold">
                      {item.id}
                    </span>
                  </div>
                                     
                  {/* Content */}
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="md:flex-1 h-[450px] flex justify-center md:ml-10">
            <Image
              src="/landingimage.png"
              alt="Lumbini Engineering College"
              width={600}
              height={450}
              className="rounded-lg shadow-lg object-cover h-[450px] w-[400px]"
            />
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-20 pt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 mx-auto mb-4 bg-indigo-50 rounded-full flex items-center justify-center border-2 border-indigo-100">
                  <span className="text-2xl text-indigo-600">
                    {stat.icon}
                  </span>
                </div>
                
                {/* Number */}
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                
                {/* Title */}
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.title}
                </div>
                
                {/* Description */}
                <div className="text-sm text-gray-500">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}