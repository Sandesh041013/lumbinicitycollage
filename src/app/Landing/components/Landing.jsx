"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Landing = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/lecvideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/50 -z-10"></div>
      <div className="px-4 sm:px-8 md:px-12 text-white max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight">
          Lumbini Engineering, <br />
          Management & Science <br />
          College
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200">
          The leading hub for innovation, research, and professional growth in
          Nepal.
        </p>
        <p className="mt-2 text-sm sm:text-base text-gray-300 ">
          Affiliated to Pokhara University
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/admission">
            <Button className="px-6 py-3 bg-[#2E3192] hover:bg-indigo-800 text-white rounded-md text-lg">
              Admission Open →
            </Button>
          </Link>
          <Link href="/programs">
            <Button
              variant="outline"
              className="px-6 py-3 border-2 bg-transparent border-white text-white hover:bg-white hover:text-black text-lg"
            >
              Explore Programs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
