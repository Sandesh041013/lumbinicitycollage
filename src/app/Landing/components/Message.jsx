import React from 'react';
import Image from 'next/image';

export default function Message() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="px-5 py-2 text-sm font-medium bg-rose-100 text-rose-600 rounded-full inline-block mb-6">
            Leadership Message
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Message from <span className="text-purple-600">Principal</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
          <div className="flex-shrink-0 order-1 lg:order-1">
            <div className="relative">
              <div className="w-80 h-80 md:w-82 md:h-96 bg-blue-600 rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/principal.png" 
                  alt="Principal"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover"
                />
              </div>
              
            </div>
          </div>
          <div className="flex-1 order-2 lg:order-2">
            <div className="mb-8">
              <h3 className="text-lg md:text-xl font-bold text-gray-600 uppercase tracking-wide mb-2">
                WELCOME TO LUMBINI ENGINEERING COLLEGE
              </h3>
              <p className="text-base md:text-lg text-gray-500 font-medium">
                (LUMBINI ENGINEERING, MANAGEMENT & SCIENCE COLLEGE)
              </p>
            </div>
            <div className="mb-8">
              <p className="text-gray-600 leading-relaxed text-base md:text-lg text-justify">
                Lumbini Engineering College (LEC) was established in 2000 A.D. with a motto of imparting 
                technical knowledge skill and scientific attitude among the young talent and creating 
                consciousness among the common people towards practical aspects of science and 
                technology. LEC is the only engineering college in Rupandehi district in Lumbini Zone. A 
                group of academicians, engineers and social workers of the region with their creative 
                minds and many years of professional experience guided by a sense of social as well as 
                academic responsibility has promoted it to fulfill the long standing demand of an 
                engineering college of lumbini zone. It then became Lumbini Engineering, Management & 
                Science College which is affiliated to Pokhara University for better delivery to all.
              </p>
            </div>
            <div className="border-l-4 border-rose-500 pl-6">
              <h4 className="text-xl md:text-2xl font-bold text-blue-600 mb-1">
                Er. RK Shah
              </h4>
              <p className="text-gray-500 font-medium text-base md:text-lg">
                Principal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}