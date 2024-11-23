import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="flex font-roboto text-white">
      <div className="bg-outer-background w-full min-h-screen flex relative">
         <h1 className="font-medium text-2xl absolute top-5 left-10">Dashboard</h1>
        
        <div class="grid grid-cols-6 gap-6 p-10 h-screen w-full mt-8">
          
          <div class="bg-inner-background col-span-2 flex items-center justify-center text-white font-bold">
            Neural Network
          </div>
          <div class="bg-inner-background col-span-3 flex items-center justify-center text-white font-bold">
            Neural Network
          </div>

          <div class="bg-inner-background col-span-1 row-span-2 flex items-center justify-center text-white font-bold">
            Column 1 (2 Rows)
          </div>
          <div class="bg-inner-background col-span-3 flex items-center justify-center text-white font-bold">
            Column 3
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
