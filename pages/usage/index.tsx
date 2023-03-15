import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";

type Props = {
  recordMap: any;
};

const usage = (props: Props) => {
  return (
    <div className="mt-12">
      <NotionRenderer className="text-inherit" darkMode={true} recordMap={props.recordMap} />
    </div>
    // <article className="prose lg:prose-xl mt-12 text-white">
    // </article>
  );
};

export default usage;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage("c95a5f82153c4722b63c5500c7cce5b8");

  return {
    props: {
      recordMap,
    },
  };
};
