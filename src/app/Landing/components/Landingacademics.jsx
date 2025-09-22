import React from 'react';

export default function AcademicPrograms() {
  const programs = [
    {
      icon: "👨‍🎓",
      title: "Masters Degree",
      description: "Advanced level programs for specialized expertise and research",
      duration: "2 Years",
      university: "Pokhara University",
      availablePrograms: [
        "M.Sc in Construction Management",
        "MBA",
        "M.E. in various disciplines"
      ],
      buttonColor: "border-blue-500 text-blue-600 hover:bg-blue-50"
    },
    {
      icon: "🎓",
      title: "Bachelors",
      description: "Advanced level programs for specialized expertise and research",
      duration: "4 Years",
      university: "Pokhara University",
      availablePrograms: [
        "B.E. Civil Engineering",
        "B.E. Computer Engineering",
        "B.E. Information Technology",
        "BCA",
        "BBA"
      ],
      buttonColor: "border-rose-500 text-rose-600 hover:bg-rose-50",
      isHighlighted: true
    },
    {
      icon: "📚",
      title: "Diploma Degree",
      description: "Practical and industry-focused technical diploma programs",
      duration: "3 Years",
      university: "Pokhara University",
      availablePrograms: [
        "Diploma in Civil Engineering",
        "Diploma in Computer Engineering"
      ],
      buttonColor: "border-blue-500 text-blue-600 hover:bg-blue-50"
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <span className="px-5 py-2 text-sm font-medium bg-blue-100 text-blue-600 rounded-full inline-block mb-6">
            Academic Excellence
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Academic <span className="text-purple-600">Programs</span>
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto text-lg">
            Comprehensive educational programs designed to prepare students for successful careers in engineering,
            management, and technology sectors.
          </p>
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 items-center">
          {programs.map((program, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                program.isHighlighted 
                  ? 'ring-2 ring-rose-200 border-rose-100 p-8' 
                  : 'border border-gray-100 p-6 h-fit mb-8'
              }`}
            >
        
              <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                program.isHighlighted 
                  ? 'bg-rose-50 border-2 border-rose-200' 
                  : 'bg-blue-50 border-2 border-blue-200'
              }`}>
                <span className="text-2xl">
                  {program.icon}
                </span>
              </div>

           
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                {program.title}
              </h3>

          
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                {program.description}
              </p>

         
              <div className="flex justify-between items-center mb-6 text-sm">
                <div className="flex items-center text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {program.duration}
                </div>
                <div className="text-gray-700 font-md w-36 flex justify-center items-center border-2 border-gray-300 rounded-lg">
                  {program.university}
                </div>
              </div>

            
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                  Available Programs
                </h4>
                <ul className="space-y-2">
                  {program.availablePrograms.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <span className={`w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0 ${
                        program.isHighlighted ? 'bg-rose-500' : 'bg-blue-500'
                      }`}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

         
              <button className={`w-full py-3 px-6 rounded-xl border-2 font-medium transition-all duration-200 flex items-center justify-center group ${program.buttonColor}`}>
                Learn More
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

 
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 flex items-center mx-auto group shadow-lg hover:shadow-xl">
            View All
            <div className="w-6 h-6 ml-3 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}