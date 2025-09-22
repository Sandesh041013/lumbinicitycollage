import React from 'react';
import Image from 'next/image';

export default function OurGallery() {
  const galleryImages = [
    { id: 1, src: "/gallery1.png", alt: "Award Ceremony" },
    { id: 2, src: "/gallery2.png", alt: "Group Trip" },
    { id: 3, src: "/gallery3.png", alt: "Formal Group" },
    { id: 4, src: "/gallery4.png", alt: "Academic Meeting" },
    { id: 5, src: "/gallery5.png", alt: "Computer Lab" },
    { id: 6, src: "/gallery6.png", alt: "College Celebration" },
    { id: 7, src: "/gallery7.png", alt: "Food Festival" },
    { id: 8, src: "/gallery8.png", alt: "Classroom" },
    { id: 9, src: "/gallery9.png", alt: "Certificate Ceremony" },
    { id: 10, src: "/gallery10.png", alt: "Graduation" }
  ];

  // Layout structure for the V-shape (array of columns, each column has 2 images)
  const vLayout = [
    [0, 5], // first column: top-left, bottom-left
    [1, 6], // second column: top-left-center, bottom-left-center
    [2, 7], // center column: top-center, bottom-center
    [3, 8], // fourth column: top-right-center, bottom-right-center
    [4, 9]  // fifth column: top-right, bottom-right
  ];

  const renderImage = (image) => (
    <div key={image.id} className="w-56 h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer relative">
      <Image
        src={image.src}
        alt={image.alt}
        width={224}
        height={160}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>
  );

  return (
    <section className="py-20 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="px-5 py-2 text-sm font-medium bg-blue-100 text-blue-600 rounded-full inline-block mb-6">
            Captured Moments
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-purple-600">Gallery</span>
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-lg">
            Experience the energy, achievements, and community of our college.
          </p>
        </div>

        {/* Desktop V-Shaped Layout */}
        <div className="hidden lg:block mb-12">
          <div className="flex justify-center">
            <div className="grid grid-cols-5 gap-10 max-w-6xl">
              {vLayout.map((column, colIndex) => (
                <div key={colIndex} className={`flex flex-col items-center space-y-4 ${colIndex === 2 ? 'mt-16' : colIndex === 1 || colIndex === 3 ? 'mt-8' : ''}`}>
                  {column.map(index => renderImage(galleryImages[index]))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden mb-12">
          <div className="grid grid-cols-2 gap-6">
            {galleryImages.slice(0, 8).map(renderImage)}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block md:hidden mb-12">
          <div className="grid grid-cols-1 gap-6">
            {galleryImages.slice(0, 6).map(renderImage)}
          </div>
        </div>

        {/* View Gallery Button */}
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 flex items-center mx-auto group shadow-lg hover:shadow-xl">
            View Gallery
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
