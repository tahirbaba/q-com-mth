// src/app/about/page.tsx
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
        <Navbar /><br />
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* About Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            We are dedicated to providing the freshest fruits and vegetables to our customers, ensuring that quality, taste, and health come first.
            Our mission is to promote healthy living by offering a wide variety of fresh produce sourced from trusted farms.
          </p>

          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our vision is to become the leading provider of organic and farm-fresh produce in the region. We aim to build long-term relationships with our customers by continuously improving our services and ensuring the highest level of customer satisfaction.
          </p>
        </div>

        {/* Team Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <Image
                src="/tahir.jpg"
                alt="tahir"
                width={150}
                height={150}
                className="mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800"> Muhammad Tahir Hasni </h3>
              <p className="text-gray-600"> Founder & CEO </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
            <Image
  src="/taimoor.jpg"
  alt="taimoor"
  width={100}
  height={100}
  className="mx-auto rounded-full mb-4"
/>

              <h3 className="text-xl font-semibold text-gray-800"> Taimoor Siddique </h3>
              <p className="text-gray-600">Head of Marketing</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <Image
                src="/tahir.jpg"
                alt="Team Member 3"
                width={150}
                height={150}
                className="mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800"> Muhammad Iqbal </h3>
              <p className="text-gray-600">Operations Manager</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default About;
