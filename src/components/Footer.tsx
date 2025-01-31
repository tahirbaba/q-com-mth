import React from 'react';
import { FaFacebookF, FaYoutube, FaSkype, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-black py-10">
      <div className="container mx-auto px-4 text-center">
        {/* Top Section */}
        <div className="flex justify-center gap-8 mb-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-300 text-2xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-300 text-2xl"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.skype.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-300 text-2xl"
          >
            <FaSkype />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-300 text-2xl"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* Middle Section */}
        <div className="mb-6">
          <p>&copy; 2025 Mandi To Home. All Rights Reserved.</p>
        </div>

        {/* Bottom Section */}
        <div>
          <p>
            <a href="/privacy-policy" className="hover:text-green-300">
              Privacy Policy
            </a>{' '}
            |{' '}
            <a href="/terms-of-service" className="hover:text-green-300">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
