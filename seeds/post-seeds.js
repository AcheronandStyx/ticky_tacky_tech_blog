const sequelize = require("../config/connection");
const { Post } = require("../models");

const postData = [
  {
    title: "Random gibberish",
    post_text: "alteration at surrounded comparison.",
    user_id: 1,
  },
  {
    title: "Random gibberish",
    post_text:
      "Consider occasion get improved him she eat. Letter by lively oh denote an.",
    user_id: 1,
  },
  {
    title: "Random gibberish",
    post_text: "Sentiments two occasional affronting solicitude travelling",
    user_id: 2,
  },
  {
    title: "Random gibberish",
    post_text: "Sentiments two occasional affronting solicitude travelling",
    user_id: 3,
  },
  {
    title: "Random gibberish",
    post_text: "Sentiments two occasional affronting solicitude travelling",
    user_id: 4,
  },
  {
    title: "Random gibberish",
    post_text: "Sentiments two occasional affronting solicitude travelling",
    user_id: 4,
  },
  {
    title: "Random gibberish",
    post_text: "Sentiments two occasional affronting solicitude travelling",
    user_id: 1,
  },
  {
    title: "Random gibberish",
    post_text: "Remain valley who mrs uneasy remove wooded him you.",
    user_id: 3,
  },
  {
    title: "Random gibberish",
    post_text: "Remain valley who mrs uneasy remove wooded him you.",
    user_id: 1,
  },
  {
    title: "Random gibberish",
    post_text: "Remain valley who mrs uneasy remove wooded him you.",
    user_id: 2,
  },
  {
    title: "Random gibberish",
    post_text: "Remain valley who mrs uneasy remove wooded him you.",
    user_id: 1,
  },
  {
    title: "Random gibberish",
    post_text: "Remain valley who mrs uneasy remove wooded him you.",
    user_id: 4,
  },
  {
    title: "Random gibberish",
    post_text: "Remain valley who mrs uneasy remove wooded him you.",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData, { individualHooks: true });

module.exports = seedPosts;
