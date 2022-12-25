import React from "react";
import { useRouter } from "next/router";
import Logo from "./Logo";
import Button from "./Button";
import Link from "next/link";

type Props = {};

const AppBar = (props: Props) => {
  const router = useRouter();
  return (
    <div className="max-h-20 py-8 bg-opacity-0">
      <div className="max-h-12 flex flex-row align-middle">
        <Logo></Logo>
        <div className="flex flex-1 flex-row justify-end space-x-8">
          <Link href="/document" className="hidden md:block self-center hover:cursor-pointer">
            Document
          </Link>
          <Link href="/pricing" className="hidden md:block self-center hover:cursor-pointer">
            Pricing
          </Link>
          {/* <a className="hidden md:block self-center hover:cursor-pointer">Blog</a> */}
          {/* <a className="hidden md:block self-center hover:cursor-pointer">Help</a> */}
          <Link href="/about" className="hidden md:block self-center hover:cursor-pointer">
            About
          </Link>
          <Button
            onClick={() => {
              router.push("/download");
            }}
          >
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
