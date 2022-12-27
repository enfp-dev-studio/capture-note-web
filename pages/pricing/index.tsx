import React from "react";
import { useTranslation } from "next-i18next";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AppStoreBadge from "../../components/AppStoreBadge";
import clsx from "clsx";

type Props = {};

const Pricing = (props: Props) => {
  const { t } = useTranslation("pricing");

  return (
    <div className="container flex justify-center h-screen">
      <div className="flex grow flex-col max-w-xl mt-24">
        <p className="self-center font-bold text-3xl">{t("h1")}</p>
        <p className="mx-auto text-xl text-secondary opacity-70 text-center mt-12 !important">
          {t("p1")}
        </p>
        <div className="text-base text-justify mt-12">{t("p2")}</div>
        {/* <p className="mt-4 text-sm whitespace-pre">{t("p")}</p> */}
      </div>
    </div>
  );
};

export default Pricing;

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["pricing"])),
  },
});
