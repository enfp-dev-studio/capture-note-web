import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import Button from "../components/Button";
import Feature from "../components/Feature";
import ImageDescrptionContainer from "../components/ImageAndDescriptionBox";
import {
  ArrowRightIcon,
  BookIcon,
  CaptureNoteIcon,
  CopyIcon,
  GameIcon,
  ImageIcon,
  InternetIcon,
  SaveIcon,
  VideocamIcon,
  YoutubeIcon,
} from "../components/Icons";

type Props = {};

const Home = (props: Props) => {
  const router = useRouter();
  const { t } = useTranslation("home");

  return (
    <>
      <div className="self-center mt-28">
        <div className="container mt-20 my-8">
          <h1 className="mx-auto max-w-3xl text-2xl md:text-5xl md:font-black self-center text-center leading-[1.2em]">
            {t("h1")}
          </h1>
          <p className="mx-auto md:max-w-4xl md:text-2xl text-center md:leading-16 mt-8 md:!important opacity-70">
            {t("h1-p")}
          </p>
        </div>
        <div className="flex justify-center mt-14">
          <Button
            onClick={() => {
              router.push("/download");
            }}
          >
            Get started
          </Button>
        </div>
      </div>
      <div className="container max-w-5xl mt-20 mx-auto">
        <Feature></Feature>
        <div className="grid grid-cols-2 space-x-4 mt-28">
          <div className="my-auto m-4">
            <div className="text-2xl font-bold">{t("step-1-title")}</div>
            <div className="text-lg leading-7 mt-8">
              {t("step-1-description")}
            </div>
          </div>
          <div className="bg-neutral-800 rounded-md m-4 grid grid-cols-3 place-items-center h-72 opacity-90">
            <BookIcon></BookIcon>
            <GameIcon></GameIcon>
            <ImageIcon></ImageIcon>
            <YoutubeIcon></YoutubeIcon>
            <VideocamIcon></VideocamIcon>
            <InternetIcon></InternetIcon>
          </div>
        </div>
        <div className="grid grid-cols-2 space-x-4 mt-28">
          <div className="bg-neutral-800 m-4 rounded-md h-72">
            <img
              className="rounded-md obhject-cover h-full w-full shadow-md"
              src={"/assets/main_edit.jpeg"}
            ></img>
          </div>
          <div className="my-auto m-4">
            <div className="text-2xl font-bold">{t("step-2-title")}</div>
            <div className="text-lg leading-7 mt-8">
              {t("step-2-description")}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 space-x-4 mt-28">
          <div className="my-auto  m-4">
            <div className="text-2xl font-bold">{t("step-3-title")}</div>
            <div className="text-lg leading-7 mt-8">
              {t("step-3-description")}
            </div>
          </div>
          <div className="bg-neutral-800 rounded-md h-72 flex flex-row items-center justify-center space-x-8">
            <div className="flex justify-center">
              <img className="object-contain" src="/app_bar_logo.png"></img>
            </div>
            <div className="flex flex-col justify-center items-center">
              <ArrowRightIcon></ArrowRightIcon>
            </div>
            <div className="space-y-8">
              <div className="flex flex-row items-center space-x-4">
                <CopyIcon></CopyIcon>
                <p className="!important font-bold">Copy To Clipboard</p>
              </div>
              <div className="flex flex-row items-center space-x-4">
                <SaveIcon></SaveIcon>
                <p className="!important font-bold">Save as Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["home"])),
  },
});

export default Home;
