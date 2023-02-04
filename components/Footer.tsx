import React from "react";
// import AppStoreBadge from "../components/AppStoreBadge";
import Link from "next/link";

type Props = {};

type LinkLabel = {
  title: string;
  link: string;
};

type LinkListProps = {
  title: string;
  links: LinkLabel[];
};

const mailAddress = "contact@enfpdev.com";

const LinkList = (props: LinkListProps) => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="text-lg font-bold">{props.title}</div>
      {props.links.map((link) => (
        <Link key={link.title} href={link.link} className="text-lg">
          {link.title}
        </Link>
      ))}
    </div>
  );
};

const Footer = () => {
  const mailTo = `mailto:${mailAddress}?${"To Capture Note"}=!&body=${""}`;

  return (
    <div className="w-full text-center">
      <div className="columns-2 md:columns-3 md:w-full">
        <div className="w-full flex">
          <LinkList
            title="Product"
            links={[
              { title: "Pricing", link: "/pricing" },
              { title: "Docs", link: "/docs" },
            ]}
          />
        </div>
        <div className="w-full flex">
          <LinkList
            title="Connect"
            links={[
              { title: "Contact", link: mailTo },
              { title: "Contribute", link: "/contribute" },
            ]}
          />
        </div>
        <div className="w-full flex">
          <LinkList
            title="About"
            links={[
              { title: "Capture Note", link: "/about" },
              {
                title: "Privacy Policy",
                link: "https://www.notion.so/enfp-dev-studio/Privacy-Policy-62d32564637940119832e8b09971e4e5",
              },
              // { title: "Terms of Use", link: "/termsofuse" },
            ]}
          />
        </div>
        {/* <div className="w-full flex">
          <div>You can also download from the App Store.</div>
          <AppStoreBadge
            width={90}
            height={30}
            appStoreLink={"https://apps.apple.com/app/id1620829533"}
          ></AppStoreBadge>
        </div> */}
      </div>

      <p className="my-6 text-sm md:mt-24">
        &copy; Copyright {new Date().getFullYear()}. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
