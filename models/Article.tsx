import { Schema, models, model } from "mongoose";

const article = new Schema(
  {
    title: String,
    text: String,
    author: String,
    comments: Number,
    region: String,
    // date: Date,
  }
  // { collection: "hltv" }
);

const Article = models.Article || model("Article", article);

export default Article;
