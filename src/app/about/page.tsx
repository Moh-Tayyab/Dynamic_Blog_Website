import React from "react";

const page = () => {
  return (
    <section className="text-gray-600 px-6">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl lg:text-6xl leading-8 font-bold  text-gray-900 mb-6">
          About TechTail
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 text-xl">
            Welcome to TechTail, your premier destination for exploring the
            latest advancements and trends in technology. Our mission is to
            simplify complex innovations, showcase their potential, and discuss
            their transformative impact on industries and everyday life. </p><br />
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 text-xl">
            Founded by a passionate team of tech enthusiasts, researchers, and
            industry leaders, TechTail is dedicated to delivering accurate,
            insightful, and thought-provoking content across a wide spectrum of
            technological fields.</p> <br />
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 text-xl">
            Whether you  a seasoned professional, an aspiring tech enthusiast,
            or simply curious about the future of innovation, our blog offers
            in-depth analyses, practical guides, and engaging discussions to
            keep you ahead in the ever-evolving world of technology.
          </p>
        </div>
        
        <div className="flex flex-wrap -m-4">
  <div className="xl:w-1/2 md:w-1/2 p-4">
    <div className="border border-gray-200 p-6 rounded-lg">
      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-6 h-6"
          viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      </div>
      <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
        Emerging Technologies
      </h2>
      <p className="leading-relaxed text-base">
        Stay updated on groundbreaking innovations shaping the future of industries and daily life.
      </p>
    </div>
  </div>
  <div className="xl:w-1/2 md:w-1/2 p-4">
    <div className="border border-gray-200 p-6 rounded-lg">
      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-6 h-6"
          viewBox="0 0 24 24">
          <circle cx={6} cy={6} r={3} />
          <circle cx={6} cy={18} r={3} />
          <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
        </svg>
      </div>
      <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
        In-Depth Analysis
      </h2>
      <p className="leading-relaxed text-base">
        Comprehensive insights into the latest trends and their impact on technology and society.
      </p>
    </div>
  </div>
  <div className="xl:w-1/2 md:w-1/2 p-4">
    <div className="border border-gray-200 p-6 rounded-lg">
      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-6 h-6"
          viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx={12} cy={7} r={4} />
        </svg>
      </div>
      <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
        Tech Guides
      </h2>
      <p className="leading-relaxed text-base">
        Explore practical guides and tutorials to understand and implement emerging tech trends.
      </p>
    </div>
  </div>
  <div className="xl:w-1/2 md:w-1/2 p-4">
    <div className="border border-gray-200 p-6 rounded-lg">
      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-6 h-6"
          viewBox="0 0 24 24">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />
        </svg>
      </div>
      <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
        Industry Trends
      </h2>
      <p className="leading-relaxed text-base">
        Discover key insights and trends driving innovation across various technology sectors.
      </p>
    </div>

  </div>
</div>

      </div>
      <div className="xl:w-auto p-4 bg-black rounded h-auto  justify-around items-center text-center">
        <div className="text-white font-bold text-3xl ">Join Our Community</div>
       <p className="text-white my-4 font-medium ">
       Be part of our growing community of AI enthusiasts. Subscribe to our newsletter for the latest updates, exclusive content, and special offers.
        </p>
        <input className="px-8 py-3 text-gray-300 bg-white-500 rounded-md" type="text" placeholder="
        Enter your email address" /> {" "}
        <button className="px-8 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 my-3 font-medium ">Subscribe</button>
      </div>
    </section>
  );
};

export default page;
