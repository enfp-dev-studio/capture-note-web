import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import Button from "../components/Button";
import Feature from "../components/Feature";
import Image from "next/image";
// import ImageDescrptionContainer from "../components/ImageAndDescriptionBox";
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
import { Params } from "../constants/params";
import OSType from "../types/OSType";

type Props = {};

export const getPlatform = (): OSType => {
  const userAgent =
    typeof window !== "undefined" ? window.navigator.userAgent : "";

  if (userAgent.includes("Windows")) {
    if (userAgent.indexOf("Win64") !== -1 || userAgent.indexOf("x64") !== -1) {
      console.log("Windows 64-bit");
      return "win";
    }
  } else if (userAgent.includes("Mac OS X")) {
    return "mac";
  }
  return "other";
};

const Home = (props: Props) => {
  const router = useRouter();
  const [downloads, setDownloades] = React.useState<
    { title: string; link: string }[]
  >([]);
  const { t } = useTranslation("home");
  useEffect(() => {
    const getDownloads = async () => {
      let latestRelease = await getLatestRelease();
      latestRelease?.assets?.filter((asset: any) => {
        if (asset.name.toString().includes("blockmap")) {
          return asset.browser_download_url;
        }
      });
      const platform = getPlatform();
      let downloads = [];
      switch (platform) {
        case "win":
          const winLink = latestRelease?.assets?.find((asset: any) =>
            asset.name.toString().includes("setup-x64.exe")
          )?.browser_download_url;
          if (winLink) {
            downloads.push({
              title: "Download Windows 64-bit",
              link: winLink,
            });
          }
          break;
        case "mac":
          const arm64Link = latestRelease?.assets?.find((asset: any) =>
            asset.name.toString().includes("arm64.dmg")
          )?.browser_download_url;
          if (arm64Link)
            downloads.push({
              title: "Mac OS X (Apple Silicon)",
              link: arm64Link,
            });
          const x64Link = latestRelease?.assets?.find((asset: any) =>
            asset.name.toString().includes("x64.dmg")
          )?.browser_download_url;
          if (x64Link) {
            downloads.push({
              title: "Mac OS X (Intel)",
              link: x64Link,
            });
          }
          break;
        default:
          alert("Unsupported OS");
      }
      console.log(downloads);
      setDownloades(downloads);
    };
    getDownloads();
  }, []);

  const getLatestRelease = async (): Promise<any> => {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${Params.releaseRepository}/releases/latest`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="self-center mt-28 ">
        <div className="container mt-20 my-8 mx-auto">
          <h1 className="mx-auto max-w-3xl text-2xl md:text-5xl md:font-black self-center text-center leading-[1.2em]">
            {t("h1")}
          </h1>
          <p className="mx-auto md:max-w-4xl md:text-2xl text-center md:leading-16 mt-8 md:!important opacity-70">
            {t("h1-p")}
          </p>
        </div>
        <div className="flex flex-row justify-center mt-8 space-x-4">
          {downloads?.map((download) => {
            return (
              <Button
                minWidth="16rem"
                key={download.title}
                onClick={() => {
                  router.push(download.link);
                }}
              >
                {download.title}
              </Button>
            );
          })}
        </div>
      </div>
      <div className="container mt-24 mx-auto">
        <Feature></Feature>
      </div>
      <div className="mt-12 w-screen">
        <div className="container mx-auto md:grid md:grid-cols-3 pt-20">
          <div className="grid grid-rows-2">
            <div className="bg-neutral-800 rounded-md m-4 grid grid-cols-3 place-items-center h-64 opacity-90">
              <BookIcon></BookIcon>
              <GameIcon></GameIcon>
              <ImageIcon></ImageIcon>
              <YoutubeIcon></YoutubeIcon>
              <VideocamIcon></VideocamIcon>
              <InternetIcon></InternetIcon>
            </div>
            <div className="m-4">
              <div className="text-2xl font-bold">{t("step-1-title")}</div>
              <div className="text-lg leading-7 mt-8">
                {t("step-1-description")}
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2">
            <div className="m-4 rounded-md h-64 relative overflow-hidden">
              <Image
                alt=""
                fill={true}
                className="rounded-md object-contain h-full w-full shadow-md"
                src={"/assets/main_example_2.webp"}
              ></Image>
            </div>
            <div className="m-4">
              <div className="text-2xl font-bold">{t("step-2-title")}</div>
              <div className="text-lg leading-7 mt-8">
                {t("step-2-description")}
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2">
            <div className="bg-neutral-800 rounded-md m-4 h-64 flex flex-row items-center justify-center space-x-4">
              <div className="flex justify-center">
                <Image
                  width={48}
                  height={48}
                  alt="app_bar_logo"
                  className="object-contain"
                  src="/app_bar_logo.webp"
                ></Image>
              </div>
              <div className="flex flex-col justify-center items-center">
                <ArrowRightIcon></ArrowRightIcon>
              </div>
              <div className="space-y-8">
                <div className="flex flex-row items-center space-x-4">
                  <CopyIcon></CopyIcon>
                  <p className="!important font-bold">Copy to Clipboard</p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <SaveIcon></SaveIcon>
                  <p className="!important font-bold">Save as Image</p>
                </div>
              </div>
            </div>
            <div className="m-4">
              <div className="text-2xl font-bold">{t("step-3-title")}</div>
              <div className="text-lg leading-7 mt-8">
                {t("step-3-description")}
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
