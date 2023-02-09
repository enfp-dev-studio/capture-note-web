import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Logo = (props: Props) => {
  return (
    <>
      <Link href="/" className="flex flex-row">
        <Image
          width={48}
          height={48}
          src="/app_bar_logo.webp"
          className="object-contain"
          alt={""}
        />
        <div className="self-center ml-2 font-bold text-base">Capture Note</div>
      </Link>
    </>
  );
};

export default Logo;
