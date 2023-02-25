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
