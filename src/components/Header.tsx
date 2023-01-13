import React from "react";
import Image from "next/image";

const Header = () => (
  <>
    <header className="fixed w-full pt-8 pb-8">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="logo font-extrabold text-xl">
            <Image
              src="logo.svg"
              alt="Picture of the author"
              width={185}
              height={50}
            />
          </div>
          <div className="flex">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/nenadmarinkovic/snippetbase"
            >
              Want to contribute?
            </a>
          </div>
        </div>
      </div>
    </header>
  </>
);

export default Header;
