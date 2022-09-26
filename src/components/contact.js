import React from "react";

export default function contact() {
  return (
    <div>
      <form class="grid grid-rows-3 grid-cols-4 pt-56 md:pt-40 container mx-auto gap-9">
        <div class=" col-span-4 w-4/4 grid justify-center text-white text-6xl">
          <h1>Contact</h1>
        </div>

        {/* name */}
        <div class=" col-span-4 w-4/4 md:w-3/4 grid justify-center">
          <label class="block">
            <span class="block text-sm font-medium text-white h-12">
              <p class="md:text-2xl">Name</p>
            </span>
            <input
              type="email"
              class="w-96 text-white bg-black "
              placeholder="John Doe"
            ></input>
          </label>
        </div>

        {/* email */}
        <div class=" col-span-4 w-4/4 md:w-3/4 grid justify-center">
          <label class="block">
            <span class="block text-sm font-medium text-white h-12">
              <p class="md:text-2xl">Email</p>
            </span>
            <input
              type="email"
              class="w-96 text-white bg-black "
              placeholder="jhon@gmail.com"
            ></input>
          </label>
        </div>

        {/* message */}
        <div class=" col-span-4 w-4/4 md:w-3/4 grid justify-center">
          <label class="block">
            <span class="block text-sm font-medium text-white h-12">
              <p class="md:text-2xl">Message</p>
            </span>
            <input
              type="email"
              class="w-96 text-white bg-black "
              placeholder="Enter your message here"
            ></input>
          </label>
        </div>

        {/* button */}
        <div class="  col-span-4 w-4/4 md:w-3/4 grid justify-center">
          <label class="block pr-60 pt-12">
            <button type="submit" value="Submit" class="bg-white h-12 rounded w-36">
              <p>Send</p>
            </button>
          </label>
        </div>
      </form>
    </div>
  );
}
