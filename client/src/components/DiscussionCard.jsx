import React from "react";

const DiscussionCard = ({ post }) => {
  return (
    <article className="discussion-card">
      <header className="dc-header">
        <div className="avatar">{post.author ? post.author[0] : "A"}</div>
        <div>
          <div className="author">{post.author || "Anonymous"}</div>
          <div className="meta">
            {new Date(post.createdAt).toLocaleString()}
          </div>
        </div>
      </header>

      <h3 className="dc-title">{post.title}</h3>
      <p className="dc-content">{post.content}</p>

      <footer className="dc-footer">
        <span className="tag">#discuss</span>
        <button className="small">Comment</button>
      </footer>
    </article>
  );
};

export default DiscussionCard;
