import { loadScript } from "@paypal/paypal-js";
import type { NextApiRequest, NextApiResponse } from "next";

let paypal;

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  let paypal;

  try {
    paypal = await loadScript({ "client-id": "test" });
  } catch (error) {
    console.error("failed to load the PayPal JS SDK script", error);
  }

  if (paypal && paypal.Buttons) {
    try {
      await paypal.Buttons().render("#your-container-element");
    } catch (error) {
      console.error("failed to render the PayPal Buttons", error);
    }
  }
  res.status(200).json({ message: "Hello from Next.js!" });
}
