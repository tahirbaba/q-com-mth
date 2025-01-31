import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// src/app/contact/page.tsx

const Contact = () => {
    return (
      <div className="container mx-auto px-4 py-16">
        <Navbar />
        <br />

        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          Have questions? We would love to hear from you! Get in touch with us using the form below or reach out via the contact details.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
          {/* Contact Details */}
          <div className="flex flex-col justify-center space-y-6 text-gray-700">
            <div>
              <h3 className="text-lg font-medium">Whats app </h3>
              <p className="mt-1 text-gray-500">+92 3129114002</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Email</h3>
              <p className="mt-1 text-gray-500">muhammadtahirhasni@gmail.com</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Address</h3>
              <p className="mt-1 text-gray-500"> Block 5 Street 15, karachi , Saadi Town</p>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium">Follow Us</h3>
              <div className="flex space-x-4 mt-3">
                <a href="#" className="text-green-600 hover:text-green-800 transition duration-300">
                  Facebook
                </a>
                <a href="#" className="text-green-600 hover:text-green-800 transition duration-300">
                  Twitter
                </a>
                <a href="#" className="text-green-600 hover:text-green-800 transition duration-300">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div> <br />
        
      <Footer />
      </div>
    );
  };
  
  export default Contact;
  