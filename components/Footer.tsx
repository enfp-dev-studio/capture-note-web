import React from "react"
import AppStoreBadge from "../components/AppStoreBadge"
import Link from "next/link"

type Props = {}

type LinkLabel = {
  title: string
  link: string
}

type LinkListProps = {
  title: string
  links: LinkLabel[]
}

const mailAddress = "contact@enfpdev.com"

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
  )
}

const Footer = () => {
  const mailTo = `mailto:${mailAddress}?${"To Capture Note"}=!&body=${""}`

  return (
    <div className="flex flex-col items-center">
      <div className="container flex flex-col md:flex-row justify-between">
        <div className="w-full  mt-16">
          <LinkList
            title="Product"
            links={[
              { title: "Pricing", link: "/pricing" },
              { title: "Document", link: "/document" },
            ]}
          />
        </div>
        <div className="w-full mt-16">
          <LinkList
            title="Connect"
            links={[
              { title: "Contact", link: mailTo },
              { title: "Contribute", link: "/contribute" },
            ]}
          />
        </div>
        <div className="w-full mt-16">
          <LinkList
            title="About"
            links={[
              { title: "About", link: "/about" },
              {
                title: "Privacy Policy",
                link: "https://www.notion.so/enfp-dev-studio/Privacy-Policy-62d32564637940119832e8b09971e4e5",
              },
              // { title: "Terms of Use", link: "/termsofuse" },
            ]}
          />
        </div>
        <div className="w-full mt-16">
          <AppStoreBadge
            width={90}
            height={30}
            appStoreLink={"https://apps.apple.com/app/id1620829533"}
          ></AppStoreBadge>
        </div>
      </div>
      <p className="my-12 text-sm md:mt-24">&copy; Copyright {new Date().getFullYear()}. All rights reserved.</p>
    </div>
  )
}

export default Footer
