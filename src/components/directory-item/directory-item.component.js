import React from "react";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles.js";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category: { id, title, imageUrl, route } }) => {
  //       style={{ backgroundImage: `url(${imageUrl})` }}
  // this style can be put in div for background image as url

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body className="directory-item-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
