import React from "react";
import afbeelding1 from "../portfolio-images/1.png";
import afbeelding2 from "../portfolio-images/2.png";
import afbeelding3 from "../portfolio-images/3.png";
import afbeelding4 from "../portfolio-images/4.png";
import afbeelding5 from "../portfolio-images/5.png";
import afbeelding6 from "../portfolio-images/6.png";

export default function portfolio() {
  return (
    <div class="grid grid-rows-1 grid-cols-2 gap-9 md:gap-24 pt-80 md:pt-40">
      <div class="grid justify-items-end h-fit ">
        
        <img class="" src={afbeelding1} />
        <img class="pt-4 md:pt-12" src={afbeelding4} />
        <img class="pt-4 md:pt-12" src={afbeelding5} />
      </div>

      <div class="h-fit">
        <img class="" src={afbeelding2} />
        <img class="pt-4 md:pt-12" src={afbeelding3} />
        <img class="pt-4 md:pt-12" src={afbeelding6} />
      </div>
    </div>
  );
}
