import React from "react";
import DiscussionCard from "./DiscussionCard";

// placeholder sample data; will be replaced by API data
const SAMPLE = [
  {
    _id: "1",
    title: "Meme Monday",
    content: "Let's share memes!",
    author: "Ben",
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "React vs Vue",
    content: "Which do you prefer?",
    author: "Laura",
    createdAt: new Date(),
  },
];

const MainFeed = () => {
  return (
    <div className="main-feed">
      {SAMPLE.map((post) => (
        <DiscussionCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default MainFeed;
