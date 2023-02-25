import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import DocumentOSRadio from "../../components/DocumentOSRadio";
import { docKeys, getShortcut, isMacOS, ShortcutKeyType } from "../../data/keys";
import OSType from "../../types/OSType";

type ShortcutItem = {
  key: {};
  children: string[];
};

const shortcuts: ShortcutItem[] = docKeys;

const Shortcuts = ({ isMac }: { isMac: boolean }) => {
  const { t } = useTranslation("docs");

  return (
    <div className="container flex flex-col">
      {shortcuts.map((documentItem, index) => {
        return (
          <div
            id={documentItem.key.toString()}
            className="mt-12"
            key={documentItem.key + index.toString()}
          >
            <h3 className="text-xl font-semibold">
              {t(`shortcuts.${documentItem.key}.title`)}
            </h3>
            <p className="mt-1 text-base opacity-70">
              {t(`shortcuts.${documentItem.key}.description`)}
            </p>
            <div className="flex flex-col mt-8 mx-8 space-y-1">
              {documentItem.children.map((key, index) => {
                return (
                  <div
                    key={key + index.toString()}
                    className="w-full flex flex-row space-x-4 h-20 items-center"
                  >
                    <div className="h-12 w-72 flex justify-center items-center border rounded p-2 border-dark-primary">
                      <p className="font-medium">
                        {getShortcut(key as ShortcutKeyType, isMac)}
                      </p>
                    </div>
                    <div className="flex flex-col text-base font-semibold w-2/3">
                      <p className="font-normal">
                        {t(`shortcuts.${documentItem.key}.${key}.title`)}
                      </p>
                      <p className="text-justify text-base font-light opacity-70 whitespace-pre-line">
                        {t(`shortcuts.${documentItem.key}.${key}.description`)}
                      </p>
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
  const { t } = useTranslation("docs");
  const [isMac, setIsMac] = useState(isMacOS());

  return (
    <div className="container flex flex-col flex-1">
      <div className="space-y-8 flex flex-col justify-evenly mt-24">
        {/* <button>{t('change-locale', { changeTo })}</button> */}
        <>
          <h1 className="mx-auto max-w-4xl text-2xl font-bold leading-[1.2em]">
            {t("h1")}
          </h1>
          <p className="mx-auto max-w-xl opacity-70 text-xl text-center leading-16 mt-8 !important">
            {t("p1")}
          </p>
        </>
      </div>
      <div className="mt-12">
        <DocumentOSRadio setIsMac={setIsMac} isMac={isMac}></DocumentOSRadio>
      </div>
      <div id="shortcuts" className="flex flex-col">
        <Shortcuts isMac={isMac}></Shortcuts>
      </div>
    </div>
  );
};

export default Document;

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["docs"])),
  },
});
