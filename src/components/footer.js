import React from "react";

export default function Footer() {
  return (
    <div>
      <div class="grid grid-cols-2 gap-4 pt-72">
        <div class="  col-span-2 grid justify-center">
          <p class="text-white text-xl font-bold">2022 Company</p>
        </div>
        <div class=" grid justify-end">
          <p class="text-white pr-12">Privacy Policy</p>
        </div>
        <div class=" grid justify-start">
          <p class="text-white font-thin pl-9">Built by Rayan Meziani </p>
        </div>
        
        
        <div class=" col-span-2 grid justify-start invisible">
          <p>#</p>
        </div>

        <div class="col-span-2 grid justify-start invisible">
          <p>#</p>
        </div>


      </div>
    </div>
  );
}
