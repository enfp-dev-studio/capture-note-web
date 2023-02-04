import React from "react";
import { useTranslation } from "next-i18next";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AppStoreBadge from "../../components/AppStoreBadge";
import { loadScript, PayPalNamespace } from "@paypal/paypal-js";

type Props = {};

const Subscription = (props: Props) => {
  React.useEffect(() => {
    const initPaypal = async () => {
      let paypal: null | PayPalNamespace = null;
      try {
        paypal = await loadScript({ "client-id": "test" });
      } catch (error) {
        console.error("failed to load the PayPal JS SDK script", error);
      }

      try {
        if (paypal) {
          await paypal
            .Buttons?.({
              createSubscription: function (data, actions) {
                return actions.subscription.create({
                  plan_id: "YOUR_PLAN_ID", // Creates the subscription
                });
              },
              onApprove: async (data, actions) => {
                alert(
                  "You have successfully created subscription " +
                    data.subscriptionID
                ); // Optional message given to subscriber
              },
            })
            .render("#paypal-button-container");
        }
      } catch (error) {
        console.error("failed to render the PayPal Buttons", error);
      }
    };
    initPaypal();
  }, []);
  const { t } = useTranslation("subscription");

  return (
    <div className="container flex w-full justify-center items-center min-h-screen">
      <div
        className="p-4 rounded-sm w-1/2 outline-none"
        id="paypal-button-container"
      ></div>
    </div>
  );
};

export default Subscription;

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["subscription"])),
    },
  };
};
