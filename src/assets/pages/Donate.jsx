
import { useState } from "react";

function Donate() {
  const [donorName, setDonorName] = useState("");
  const [foodName, setFoodName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your food donation details have been submitted.");

    setDonorName("");
    setFoodName("");
    setQuantity("");
    setLocation("");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12">

      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-lg">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-green-700">
            Donate Food
          </h1>

          <p className="mt-3 text-gray-600">
            Share your surplus food and help people in need.
          </p>
        </div>

        {/* Donation Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Donor Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Food Name
            </label>

            <input
              type="text"
              placeholder="Enter food name"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Food Quantity
            </label>

            <input
              type="number"
              placeholder="Enter quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Location
            </label>

            <input
              type="text"
              placeholder="Enter pickup location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-green-700 py-3 text-lg font-semibold text-white transition hover:bg-green-800"
          >
            Submit Donation
          </button>

        </form>

      </div>

    </div>
  );
}

export default Donate;
