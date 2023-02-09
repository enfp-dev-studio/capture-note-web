import React from "react";
import { useTranslation } from "next-i18next";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  const { t } = useTranslation("about");
  return (
    <div className="container flex justify-center h-screen">
      <div className="space-y-8 flex flex-col items-center max-w-xl mt-24">
        <div className="space-y-8">
          {/* <button>{t('change-locale', { changeTo })}</button> */}
          <div className="flex grow space-x-4">
            <Image
              width={48}
              height={48}
              src="/app_bar_logo.webp"
              className="object-contain"
              alt={""}
            ></Image>
            <div className="self-center ml-2 font-bold text-2xl">
              Capture Note
            </div>
          </div>
          <p className="text-justify">{t("description")}</p>
          <div className="flex flex-row grow space-x-4 items-center">
            <Image
              width={48}
              height={48}
              alt=""
              className="w-16 h-16 rounded-full"
              src="/assets/about_icon.webp"
            ></Image>
            <div className="flex flex-col justify-between">
              <p className="text-2xl font-bold">Jake</p>
              <Link
                // className="w-10 h-10 flex flex-row"
                href={"https://github.com/ENFP-Dev-Studio/"}
              >
                <p className="text-sm text-secondary">ENFP-Dev-Studio</p>
                {/* <svg
                className="dark:fill-dark-primary fill-primary"
                viewBox="0 0 512 512"
              >
                <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
              </svg> */}
              </Link>
            </div>
          </div>
          <p className="text-justify">
            Hello, I'm Jake, a solo developer. In fact, ENFP-Dev-Studio is a
            one-man development team. We are interested in anything that can
            make someone more enjoyable or convenient. And I hope that what we
            have developed will help more people
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["about"])),
  },
});
