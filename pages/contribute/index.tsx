import React from "react";
import { useTranslation } from "next-i18next";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";

type Props = {};

const Contribute = (props: Props) => {
  const { t } = useTranslation("contribute");

  return (
    <div className="container flex flex-1 justify-center items-center h-96 mt-24">
      <div className="space-y-8">
        {/* <button>{t('change-locale', { changeTo })}</button> */}
        <h1 className="mx-auto max-w-xl md:text-2xl md:font-black text-center leading-[1.2em]">
          {t("h1")}
        </h1>
        <p className="mx-auto max-w-xl text-xl text-justify leading-16 mt-8 !important">
          {t("p1")}
        </p>
        <div className="flex justify-center p-10">
          <a href="https://buymeacoffee.com/enfpdev" target="_blank">
            <img
              className="rounded shadow-md"
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
              height="66"
              width="261"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contribute;

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["contribute"])),
  },
});
