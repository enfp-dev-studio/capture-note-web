import React from "react";
import { useTranslation } from "next-i18next";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type Props = {};

const About = (props: Props) => {
  const { t } = useTranslation("about");
  return (
    <div className="container flex flex-1 justify-center items-center h-96 mt-20">
      <div className="space-y-8">
        {/* <button>{t('change-locale', { changeTo })}</button> */}
        <h1 className="mx-auto max-w-4xl text-5xl font-black self-center text-center leading-[1.2em]">
          {t("h1")}
        </h1>
        <p className="whitespace-pre-line leading-10 mt-10">{t("description")}</p>
        {/* <p>
        "Capture Note" providng fastest and easiest way to make notes over the screenshot.
        <br></br>
        You can take screenshots and writes notes over them and easily save it as image file or copy
        it to clipboard.
        <br></br>
        In these days we get most of the information from visualized contents like image or video.
        But when you find the information want to remember, unfortunately, there is no easy way to
        save them. You have to write or type all the information somewhere. Some people take the
        screenshots and add it to the note app. It may be easy but this way people can't remember
        what is the information to remember because image include so many information.
      </p> */}
      </div>
    </div>
  );
};

export default About;

export const getServerSideProps: GetServerSideProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["about"])),
  },
});
