"use client"; // Mark as a client component
import Link from "next/link";

import { useState } from "react";

export default function Choice() {
  const [selectedRadio, setSelectedRadio] = useState(""); // Track selected radio button

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(event.target.id); // Update state with the selected radio button id
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="w-full max-w-md h-[40rem] p-6 bg-white rounded-3xl shadow-lg flex flex-col justify-between items-center">
        {/* Radio Buttons */}
        <div className="mt-4 flex flex-col gap-4">
          <h1 className="text-[3rem] text-black font-semibold text-center">Choose an Option</h1>
          <label className="flex items-center text-black text-[1.5rem]">
            <input
              type="radio"
              id="option-1"
              name="radio-group"
              value="1"
              checked={selectedRadio === "option-1"}
              onChange={handleRadioChange}
              className="mr-2"
            />
            Asian
          </label>

          <label className="flex items-center text-black text-[1.5rem]">
            <input
              type="radio"
              id="option-2"
              name="radio-group"
              value="2"
              checked={selectedRadio === "option-2"}
              onChange={handleRadioChange}
              className="mr-2"
            />
            Fast-Food
          </label>

          <label className="flex items-center text-black text-[1.5rem]">
            <input
              type="radio"
              id="option-3"
              name="radio-group"
              value="3"
              checked={selectedRadio === "option-3"}
              onChange={handleRadioChange}
              className="mr-2"
            />
            Italian
          </label>

          <label className="flex items-center text-black text-[1.5rem]">
            <input
              type="radio"
              id="option-4"
              name="radio-group"
              value="4"
              checked={selectedRadio === "option-4"}
              onChange={handleRadioChange}
              className="mr-2"
            />
            Vegan
          </label>

          <label className="flex items-center text-black text-[1.5rem]">
            <input
              type="radio"
              id="option-5"
              name="radio-group"
              value="5"
              checked={selectedRadio === "option-5"}
              onChange={handleRadioChange}
              className="mr-2"
            />
            Fine-Dining
          </label>
        </div>

        {/* Button */}
        <Link href="/swipe" passHref>
        <button className="w-100 mt-6 py-4 px-3 bg-purple-600 text-white rounded-lg text-lg hover:bg-blue-600 transition-colors">
          Submit Choice
        </button>
        </Link>
      </div>
    </div>
  );
}
