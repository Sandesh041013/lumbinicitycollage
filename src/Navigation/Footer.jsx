import {
  FaFacebook,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1C2431] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5">Quick Links</h3>
          <ul className="space-y-2.5">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/academics">Academics</Link></li>
            <li><Link href="/department">Department</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/downloads">Downloads</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Academics */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5">Academics</h3>
          <ul className="space-y-2.5">
            <li>MSC (Construction Management)</li>
            <li>B.E. Computer</li>
            <li>B.E. Civil Engineering</li>
            <li>MSC Structural Engineering (Proposed)</li>
            <li>B.E. Electrical & Electronics</li>
            <li>Diploma in Computer Engineering</li>
            <li>Diploma in Civil Engineering</li>
            <li>Diploma in Electrical Engineering</li>
            <li>BE IT</li>
            <li>BCA (Bachelor of Computer Application)</li>
          </ul>
        </div>

        {/* Resources + Contact */}
        <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Resources and References
            </h3>
            <ul className="space-y-2.5">
              <li>Pokhara University</li>
              <li>Nepal Engineering Council</li>
              <li>Research Article</li>
              <li>Prospectus 2025</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-9 h-9 flex items-center justify-center bg-white rounded-full">
                  <IoLocationSharp className="w-5 h-5 text-[#2E3192]" />
                </span>
                <span>Tilottama-7, Bhalwari, Rupandehi, Nepal</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-9 h-9 flex items-center justify-center bg-white rounded-full">
                  <FaPhoneAlt className="w-4 h-4 text-[#2E3192]" />
                </span>
                <span>071-561030, 561959</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-9 h-9 flex items-center justify-center bg-white rounded-full">
                  <IoMdMail className="w-5 h-5 text-[#2E3192]" />
                </span>
                <span>
                  lumbiniec@gmail.com <br />
                  lec@lumbini.edu.np
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-[#141A24] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-sm text-gray-400 text-center sm:text-left">
            Copyright © 2025. All rights reserved.
          </p>
          <div className="flex gap-5 text-gray-300 text-xl">
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaLinkedin /></Link>
            <Link href="#"><FaFacebook /></Link>
            <Link href="#"><FaYoutube /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
