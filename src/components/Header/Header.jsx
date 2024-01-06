import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <header className='h-36 bg-skin-bg-primary '>
        <div className="mt-5 ml-5 flex">
        <img className='h-16' src="assets/logo_site.png" alt="logo du site"/>
        <h1 className=" w-48 text-skin-color text-2xl">Summoners War Randomizer</h1>
        </div>
      </header>
    </>
  );
}

export default Header;
