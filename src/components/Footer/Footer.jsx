import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import club from "../../assets/club.png";

const Footer = () => {
  return (
    <div className="bg-black text-white p-4 flex flex-col md:flex-row justify-between items-center shadow-lg">
      <div className="flex items-center space-x-2 mb-4 md:mb-0">
        <a href='https://srmsigkdd.vercel.app/' target="_blank" rel="noopener noreferrer">
          <img src={club} alt="Club Logo" className="h-10 w-auto" />
        </a>
      </div>
      <div className="flex-grow text-center mb-4 md:mb-0">
        <span className="text-lg font-bold tracking-wide">© 2024 Made with ☕ by SRMIST ACM SIGKDD Student Chapter</span>
      </div>
      <div className="flex space-x-4">
        <a href="https://www.instagram.com/srmsigkdd" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition duration-300">
          <FaInstagram size={30} />
        </a>
        <a href="https://www.linkedin.com/company/srmsigkdd/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition duration-300">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/ACM-SIGKDD-SRM-KTR-STUDENT-CHAPTER" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition duration-300">
          <FaGithub size={30} />
        </a>
        <a href="https://x.com/srmsigkdd" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition duration-300">
          <FaTwitter size={30} />
        </a>
        <a href="mailto:srmsigkdd@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition duration-300">
          <FaEnvelope size={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
