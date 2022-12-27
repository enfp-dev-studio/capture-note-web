import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import Button from "../../components/Button";
import Feature from "../../components/Feature";
import ImageDescrptionContainer from "../../components/ImageAndDescriptionBox";

type Props = {};

const Home = (props: Props) => {
  const { t } = useTranslation("home");

  return (
    <>
      <div className="self-center mt-28">
        <div className="container mt-20 my-8">
          <h1 className="mx-auto max-w-4xl text-5xl font-black self-center text-center leading-[1.2em]">
            {t("h1")}
          </h1>
          <p className="mx-auto max-w-3xl text-2xl text-center leading-16 mt-8 !important">
            {t("h1-p")}
          </p>
        </div>
      </div>
      {/* <div className="container mt-28">
        <div className="flex flex-row justify-center gap-12 h-24">
          <div className="self-center">
            <Button
              onClick={() => {
                // scrollTo("download")
              }}
            >
              {t("btn-scroll-to-feature")}
            </Button>
          </div>
          <p className="self-center">Get Capture Note free</p>
        </div>
      </div> */}
      <div className="container max-w-5xl mt-28 mx-auto">
        <Feature></Feature>
        <ImageDescrptionContainer
          content={
            <div className="my-auto">
              <div className="text-2xl font-bold">
                Block apps or websites to prevent distractions
              </div>
              <div className="text-lg leading-7 mt-8">
                Flow allows you to easily block apps on your Mac so you won’t
                get distracted at work. And with Flow Pro you can even block
                websites. <br></br>Want to block websites? Check out Flow PRO.16
              </div>
            </div>
          }
          imagePosition="right"
          imageSrc="https://flowapp.info/wp-content/uploads/2020/08/App-Blocker.svg"
        ></ImageDescrptionContainer>
        <ImageDescrptionContainer
          content={
            <div className="my-auto">
              <div className="text-2xl font-bold">
                Block apps or websites to prevent distractions
              </div>
              <div className="text-lg leading-7 mt-8">
                Flow allows you to easily block apps on your Mac so you won’t
                get distracted at work. And with Flow Pro you can even block
                websites. <br></br>Want to block websites? Check out Flow PRO.
              </div>
            </div>
          }
          imagePosition="left"
          imageSrc="https://flowapp.info/wp-content/uploads/2020/08/App-Blocker.svg"
        ></ImageDescrptionContainer>
        <ImageDescrptionContainer
          content={
            <div className="my-auto">
              <div className="text-2xl font-bold">
                Block apps or websites to prevent distractions
              </div>
              <div className="text-lg leading-7 mt-8">
                Flow allows you to easily block apps on your Mac so you won’t
                get distracted at work. And with Flow Pro you can even block
                websites. <br></br>Want to block websites? Check out Flow PRO.
              </div>
            </div>
          }
          imagePosition="right"
          imageSrc="https://flowapp.info/wp-content/uploads/2020/08/App-Blocker.svg"
        ></ImageDescrptionContainer>
      </div>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["home"])),
  },
});
