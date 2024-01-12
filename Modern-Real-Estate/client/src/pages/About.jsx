import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center mt-7 bg-gray-100">
      <h1 className="text-3xl font-bold mb-5 text-slate-800">
        About Anurag Estate
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl">
        <p className="mb-4 text-slate-700">
          Welcome to Anurag Estate - your premier destination for real estate
          solutions. We specialize in assisting clients in buying, selling, and
          renting properties in sought-after neighborhoods. Our dedicated team
          of experienced agents is committed to delivering exceptional service,
          ensuring a seamless experience throughout the buying and selling
          process.
        </p>
        <p className="mb-4 text-slate-700">
          At Anurag Estate, our mission is to help you achieve your real estate
          goals with expert advice, personalized service, and a profound
          understanding of the local market. Whether you're in search of your
          dream home, selling a property, or looking to rent, we're here to
          support you every step of the way.
        </p>
        <p className="mb-4 text-slate-700">
          Our team boasts extensive experience and knowledge in the real estate
          industry, ensuring the highest level of service for our clients. We
          believe that the process of buying or selling a property should be
          both exciting and rewarding, and we are devoted to making that vision
          a reality for each of our valued clients.
        </p>
      </div>
    </div>
  );
}

export default About;
