import { NextApiRequest, NextApiResponse } from "next";
import { axiosClient } from "../../../helper/api";

const handler = async (
  req: NextApiRequest & { [key: string]: any },
  res: NextApiResponse
): Promise<void> => {
  try {
    const response = await axiosClient.get("open-job-listings", {
      headers: {
        "Content-type": "application/json",
        "x-hasura-admin-secret": process.env.XH_API_KEY,
        "Accept-Encoding": "*",
      },
    });
    res.status(200).json(response?.data);
  } catch (error) {
    res.status(400).json({
        message:`Unable to fetch data, ERROR:${error.message}`
    });
  }
};

export default handler;

