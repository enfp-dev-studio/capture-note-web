import React from "react";
import { useTranslation } from "next-i18next";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AppStoreBadge from "../../components/AppStoreBadge";

type Props = {};

const Download = (props: Props) => {
  const { t } = useTranslation("download");

  return (
    <div className="container flex justify-center h-screen">
      <div className="space-y-8 mt-48">
        {/* <button>{t('change-locale', { changeTo })}</button> */}

        {/* <div className="self-center ml-2 font-bold text-2xl"></div> */}
        <h1 className="mx-auto max-w-4xl md:text-5xl md:font-black self-center text-center leading-[1.2em]">
          {t("h1")}
        </h1>
        <p className="mx-auto max-w-3xl text-2xl text-center leading-16 mt-8 !important">
          {t("p1")}
        </p>
        <div className="flex justify-center">
          {/* <AppStoreBadge
            width={150}
            height={50}
            appStoreLink={"https://apps.apple.com/app/id1620829533"}
          ></AppStoreBadge> */}
        </div>
      </div>
    </div>
  );
};

export default Download;

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["download"])),
  },
});
