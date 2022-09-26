import React from "react";
import { NavLink } from "react-router-dom";

export default function header() {
  return (
    <nav class="flex flex-wrap justify-end pb-24 pt-6 ">
      <h1 class="text-white"></h1>

      <NavLink to="/">
        <p class="text-white px-6"> Home</p>
      </NavLink>

      <NavLink to="portfolio">
        <p class="text-white px-6"> Portfolio</p>
      </NavLink>

      <NavLink to="about">
        <p class="text-white px-6"> About</p>
      </NavLink>

      <NavLink to="contact">
        <p class="text-white px-6"> Contact</p>
      </NavLink>
    </nav>
  );
}
