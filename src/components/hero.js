import React from "react";
import blue from "../hero-images/RectangleBlue.png";
import red from "../hero-images/RectangleRed.png";

export default function hero() {
  return (
    <div class="grid grid-cols-6 gap-4">
      
      <div class="col-span-2 pl-6 h-24 text-xs md:text-3xl md:pl-24 text-white">
        <h2 class="text-sm md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      </div>

      <div class="col-span-4 h-24 justify-self-end">
        <img class="" src={red}></img>
      </div>

      <div class="justify-self-center col-span-6">
        <h1 class="text-white text-7xl pt-36">Creative</h1>
      </div>

      <div class="col-span-2">
        <img clas="" src={blue}></img>
      </div>

      <div class="col-span-2 h-24">
        <h1 class="text-white text-7xl grid justify-center">Design</h1>
      </div>
 
    </div>
  );
}

// <div class="col-span-3">
//         <img class="pt-56" src={red}></img>
//       </div>

//       <div class=" text-white h-24 col-span-6">
//         <h1 style={{ fontSize: "250px" }} class="grid justify-center">
//           Creative
//         </h1>
//         <h1 style={{ fontSize: "150px" }} class="grid justify-center">
//           Design
//         </h1>
//       </div>

//       <div class=" col-span-3">
//         <img class="" src={blue}></img>
//       </div>
