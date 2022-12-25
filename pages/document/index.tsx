import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import DocumentOSRadio from "../../components/DocumentOSRadio";
import { documentKeys } from "../../data/keys";
import OSType from "../../types/OSType";

type DocumentItem = {
  key: {};
  children: string[];
};

const documentItems: DocumentItem[] = documentKeys;

const DocumentItems = ({ os }: { os: string }) => {
  const { t } = useTranslation("document");
  return (
    <div className="w-full flex flex-col">
      {documentItems.map((documentItem, index) => {
        return (
          <div className="mt-12" key={documentItem.key + index.toString()}>
            <h3 className="text-lg font-black">
              {t(`${documentItem.key}.title`)}
            </h3>
            <p className="mt-4">{t(`${documentItem.key}.description`)}</p>
            {/* How To Use */}
            <div className="flex flex-col m-8 space-y-4"></div>
            {/* Shortcuts */}
            <div className="flex flex-col m-8 space-y-4">
              {documentItem.children.map((key, index) => {
                return (
                  <div
                    key={key + index.toString()}
                    className="flex flex-row space-x-4"
                  >
                    <div className="w-52 flex justify-center items-center border rounded p-2 border-primary dark:border-dark-primary">
                      <p className="font-extrabold">
                        {t(
                          `${
                            documentItem.key
                          }.${key}.short-cut.${os.toString()}`
                        )}
                      </p>
                    </div>
                    <div className="flex flex-col ">
                      <p className="font-bold">
                        {t(`${documentItem.key}.${key}.title`)}
                      </p>
                      <p>{t(`${documentItem.key}.${key}.description`)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

type Props = {};

const Document = (props: Props) => {
  const { t } = useTranslation("document");
  let [os, setOS] = useState<OSType>("mac");

  return (
    <div className="container flex flex-col flex-1">
      <div className="min-h-screen">
        <div className="space-y-8 flex flex-col justify-evenly">
          {/* <button>{t('change-locale', { changeTo })}</button> */}
          <>
            <h1 className="mx-auto mt-32 max-w-4xl text-5xl font-black self-center text-center leading-[1.2em]">
              {t("h1")}
            </h1>
            <p className="mx-auto max-w-3xl text-2xl text-center leading-16 mt-8 !important">
              {t("p1")}
            </p>
          </>
        </div>
        <div className="mt-12">
          <DocumentOSRadio setOS={setOS} os={os}></DocumentOSRadio>
        </div>
      </div>
      <div className="flex flex-col">
        <DocumentItems os={os}></DocumentItems>
      </div>
    </div>
  );
};

export default Document;

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["document"])),
  },
});
