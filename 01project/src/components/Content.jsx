import React from "react";


function Content() {
  return (
    <div>
      <main className="flex flex-col lg:flex-row items-center justify-between p-6 space-y-6 lg:space-y-0 lg:space-x-6 mx-auto my-5" style={{ margin: "5%" }}>
  <section className="flex-1 text-center lg:text-left">
    <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
      YOUR FEET <br />
      DESERVE <br />
      THE BEST
    </h1>
    <p className="text-lg text-gray-600 mb-6">
      YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
      YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
    </p>
    <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
      Shop Now
    </button>
    <p className="mt-4 text-gray-700 font-medium">Category</p>
  </section>
  <section className="flex-1 text-center lg:text-right">
    <img
      src="Assets/Images/hero-image.png"
      alt="Shoes display"
      className="w-full max-w-md rounded-lg shadow-lg mx-auto lg:ml-auto"
    />
    <p className="mt-4 text-gray-700 font-medium">Also Available On</p>
  </section>
</main>

    </div>
  );
}

export default Content;
