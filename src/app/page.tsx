'use client'

import { useState } from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

export default function Home() {
  const [activeSection, setActiveSection] = useState('projects');

  const sections = {
    projects: (
      <section className="fade-in">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <p className="text-lg">
          Welcome to my Projects section! Here, I showcase some of my recent and noteworthy projects:
        </p>
        {/* Add project images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            <Image src="/avatar.png" alt="Project 1" width={400} height={250} />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p>Description of Project 1 goes here.</p>
            </div>
          </div>
          {/* Add more project cards */}
        </div>
      </section>
    ),
    courses: (
      <section className="fade-in">
        <h1 className="text-3xl font-bold mb-4">Courses</h1>
        <p className="text-lg">
          Explore the courses I've completed or am currently taking to enhance my skills:
        </p>
        {/* Add course icons */}
        <div className="flex items-center mt-6">
          <FaEnvelope className="text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Course 1</h3>
            <p>Description of Course 1 goes here.</p>
          </div>
        </div>
        {/* Add more courses */}
      </section>
    ),
    blog: (
      <section className="fade-in">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <p className="text-lg">
          Discover my latest thoughts and insights on various topics in my blog posts:
        </p>
        {/* Add blog post cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            <Image src="/avatar.png" alt="Blog Post 1" width={400} height={250} />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Blog Post 1</h3>
              <p>Summary of Blog Post 1 goes here.</p>
            </div>
          </div>
          {/* Add more blog post cards */}
        </div>
      </section>
    ),
    tools: (
      <section className="fade-in">
        <h1 className="text-3xl font-bold mb-4">Tools</h1>
        <p className="text-lg">
          Check out the tools and technologies I frequently use or recommend:
        </p>
        {/* Add tool icons */}
        <div className="flex items-center mt-6">
          <FaPhoneAlt className="text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Tool 1</h3>
            <p>Description of Tool 1 goes here.</p>
          </div>
        </div>
        {/* Add more tools */}
      </section>
    ),
    contact: (
      <section className="fade-in">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="text-lg">
          Feel free to get in touch with me using the following contact information:
        </p>
        {/* Add contact icons */}
        <div className="flex items-center mt-6">
          <FaEnvelope className="text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p>example@email.com</p>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <FaPhoneAlt className="text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p>+1234567890</p>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <FaMapMarkerAlt className="text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p>123 Street, City, Country</p>
          </div>
        </div>
      </section>
    ),
    Help: (
      <section className="fade-in">
        <h1 className="text-3xl font-bold mb-4">Help</h1>
        <p className="text-lg">
          Need assistance or have questions? Don't hesitate to reach out to us:
        </p>
        {/* Add help icons */}
        <div className="flex items-center mt-6">
          <FaEnvelope className="text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p>help@example.com</p>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <FaPhoneAlt className="text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p>+1234567890</p>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <FaMapMarkerAlt className="text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p>456 Street, City, Country</p>
          </div>
        </div>
      </section>
    ),
    Products: (
      <section className="fade-in">
        <h1 className="text-3xl font-bold mb-4">Products</h1>
        <p className="text-lg">
          Explore our range of products designed to meet your needs:
        </p>
        {/* Add product images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            <Image src="/avatar.png" alt="Product 1" width={400} height={250} />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Product 1</h3>
              <p>Description of Product 1 goes here.</p>
            </div>
          </div>
          {/* Add more product cards */}
        </div>
      </section>
    ),
  };
  

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="flex flex-col justify-between bg-[#5cdc91] text-white p-6 max-w-[30%] lg:sm:w-1/5 sm:w-1/3">
        <div>
          <nav className="mt-8">
            <ul>
              {Object.keys(sections).map((key) => (
                <li key={key} className="mt-4 ">
                  <a
                    href="#"
                    onClick={() => setActiveSection(key)}
                    className={`block font-semibold px-4 py-2 rounded transition-colors duration-200 hover:text-white ${
                      activeSection === key ? 'bg-gray-700  text-white' : ''
                    } text-md lg:text-xl`}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <footer className="flex items-center justify-center bg-[#fff] w-full px-5 py-2 md:px-2 rounded-3xl">
  <div className="flex items-center">
    {/* Small screen size (sm) */}
    <Image
      src="/avatar.png"
      alt="Logo"
      width={35}
      height={35}
      className="mr-2 md:hidden lg:hidden"
    />
    {/* Medium screen size (md) */}
    <Image
      src="/avatar.png"
      alt="Logo"
      width={50}
      height={50}
      className="mr-2 hidden md:inline-block lg:hidden"
    />
    {/* Large screen size (lg) */}
    <Image
      src="/avatar.png"
      alt="Logo"
      width={35}
      height={35}
      className="mr-2 hidden lg:inline-block"
    />
    <span id="nameText" className="text-black font-bold text-[.7rem]  lg:text-[1.1rem] md:text-[.8rem]">
      Mohd Khan
    </span>
  </div>
</footer>


      </aside>
      <main className="flex-1 bg-white p-8 transition-all duration-500">
        {sections[activeSection]}
      </main>
    </div>
  );
}
