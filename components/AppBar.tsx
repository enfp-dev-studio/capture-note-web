import React from "react";
import Logo from "./Logo";
import Link from "next/link";

type Props = {};

const AppBar = (props: Props) => {
  return (
    <div className="max-h-20 py-8">
      <div className="max-h-12 flex flex-row items-center">
        <Logo></Logo>
        <div className="flex flex-1 flex-row justify-end space-x-8">
          <Link
            href="/usage"
            className="hidden md:block self-center hover:cursor-pointer"
          >
            Usage
          </Link>
          <Link
            href="/about"
            className="hidden md:block self-center hover:cursor-pointer"
          >
            About
          </Link>
          <Link
            href="/docs"
            className="hidden md:block self-center hover:cursor-pointer"
          >
            Docs
          </Link>
          <Link
            href="/pricing"
            className="hidden md:block self-center hover:cursor-pointer"
          >
            Pricing
          </Link>
          {/* <a className="hidden md:block self-center hover:cursor-pointer">Blog</a> */}
          {/* <a className="hidden md:block self-center hover:cursor-pointer">Help</a> */}
          {/* <Link href="/about" className="hidden md:block self-center hover:cursor-pointer">
            About
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default AppBar;
