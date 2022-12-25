import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Logo = (props: Props) => {
  return (
    <>
      <Link href="/" className="flex flex-row">
        <img src="/app_bar_logo.png" className="object-contain" alt={""}></img>
        <div className="self-center ml-2 font-bold text-base">Capture Note</div>
      </Link>
    </>
  );
};

export default Logo;
