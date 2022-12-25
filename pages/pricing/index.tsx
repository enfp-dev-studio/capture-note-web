import React from "react"
import { useTranslation } from "next-i18next"
import { GetServerSideProps } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import AppStoreBadge from "../../components/AppStoreBadge"
import clsx from "clsx"

type Props = {}

const Pricing = (props: Props) => {
  const { t } = useTranslation("pricing")

  return (
    <div className="container flex justify-center h-screen">
      <div className="space-y-8 flex flex-col justify-center items-center max-w-xl">
        <h1 className="mx-auto max-w-4xl text-5xl font-black self-center text-center leading-[1.2em]">{t("h1")}</h1>
        <p className="mx-auto max-w-3xl text-2xl text-center leading-16 mt-8 !important">{t("p1")}</p>
        <div className="">
          <p className="text-lg whitespace-pre-line leading-16 mt-8 ">{t("p2")}</p>
        </div>
        {/* <p className="mt-4 text-sm whitespace-pre">{t("p")}</p> */}
      </div>
    </div>
  )
}

export default Pricing

export const getServerSideProps: GetServerSideProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["pricing"])),
  },
})
