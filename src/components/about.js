import React from "react";
import afbeelding from "../aboutimages/teampic.png";
export default function about() {
  return (
    <div>
      <div class="grid grid-cols-4 gap-4 pt-40">
        <div class="  col-span-4 grid justify-center">
          <h1 class="text-white text-6xl md:text-6xl">About</h1>
        </div>
        <div class=" pt-40 col-start-1 col-end-3 pl-12 grid justify-items-center">
          <p class="text-white md:text-xl">
            We create stunning Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.We create stunning Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. After 10 years of experience Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. We create stunning
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. We create
            stunning Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
         
        <div class="pt-52 md:pt-1 col-start-3 col-end-5 grid justify-center">
          <img class="pr-7 md:" src={afbeelding} />
        </div>
      </div>
    </div>
  );
}
 