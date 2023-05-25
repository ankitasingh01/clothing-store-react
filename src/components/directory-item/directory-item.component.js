import React from "react";
import "./directory-item.styles.scss";

const DirectoryItem = ({ category: { id, title, imageUrl } }) => {
  return (
    <div
      key={id}
      className="directory-item-container"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="background-image" />
      <div className="directory-item-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
