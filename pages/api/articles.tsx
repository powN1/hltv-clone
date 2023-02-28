// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../utils/connectMongo";
import Article from "../../models/Article";
import mongoose from "mongoose";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectMongo();
    const allArticles = await Article.find({});
    res.json(allArticles);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
}
