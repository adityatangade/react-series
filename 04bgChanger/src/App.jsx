import { useState, useEffect } from "react";

function App() {
  const [color, setColor] = useState(() => localStorage.getItem("backgroundColor") || "olive");

  
  const handleColorChange = (newColor) => {
    setColor(newColor);
    localStorage.setItem("backgroundColor", newColor);
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-end"
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-between gap-10 m-10 bg-white p-4 rounded-2xl shadow-lg">
        <div className="bg-red-500 p-4 rounded">
          <button
            className="bg-white text-red-500 font-bold py-2 px-4 rounded"
            onClick={() => handleColorChange("red")}
            aria-label="Set background to red"
          >
            Red Button
          </button>
        </div>

        <div className="bg-green-500 p-4 rounded">
          <button
            className="bg-white text-green-500 font-bold py-2 px-4 rounded"
            onClick={() => handleColorChange("green")}
            aria-label="Set background to green"
          >
            Green Button
          </button>
        </div>

        <div className="bg-yellow-500 p-4 rounded">
          <button
            className="bg-white text-yellow-500 font-bold py-2 px-4 rounded"
            onClick={() => handleColorChange("yellow")}
            aria-label="Set background to yellow"
          >
            Yellow Button
          </button>
        </div>

        <div className="bg-purple-500 p-4 rounded">
          <button
            className="bg-white text-purple-500 font-bold py-2 px-4 rounded"
            onClick={() => handleColorChange("violet")}
            aria-label="Set background to violet"
          >
            Violet Button
          </button>
        </div>

        <div className="bg-pink-500 p-4 rounded">
          <button
            className="bg-white text-pink-500 font-bold py-2 px-4 rounded"
            onClick={() => handleColorChange("pink")}
            aria-label="Set background to pink"
          >
            Pink Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
