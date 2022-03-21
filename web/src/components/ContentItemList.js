/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

const contentItemListStyle = css`
  width: 80%;
  padding: 3em 5em;

  .listItem {
    padding: 1em;
    border-bottom: 2px solid #eee;
  }

  .listItemImage {
    max-width: 300px;
  }
`;

export default function ContentItemList(props) {
  return (
    <div css={contentItemListStyle}>
      <h2>Content Items</h2>
      <div>
        {props.items &&
          props.items.map((item, index) => (
            <Link to={"/" + item.slug.current} key={item.slug.current}>
              <div key={index} className="listItem">
                {item.mainImage && (
                  <img
                    src={item.mainImage.asset.url}
                    alt=""
                    className="listItemImage"
                  />
                )}
                <span>
                  <h2>{item.title}</h2>
                  <h3>{item.author}</h3>
                </span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}