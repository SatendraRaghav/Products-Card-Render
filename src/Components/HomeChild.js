import React from "react";
import Rating from "./Rating";

const HomeChild = ({ elem }) => {
  return (
    <div>
      <div className="savingDetail" >
        You are saving {elem.discountPercentage}% on this Product{" "}
      </div>
      <div className="product-title">{elem.title}</div>
      <a target="_blank" href={elem.thumbnail}>
        <img src={elem.thumbnail} alt={elem.title} style={{ width: "100%" }} />
      </a>
      <div className="desc">
        <div> {elem.description}</div>
        <br />
        <div className="productDetails">
          <div>
            <span className="actualPrice">price-&#8377;{elem.price}</span> <br />
            <br />
            <span className="offerPrice">
              Offer Price - &#8377;{" "}
              {Math.ceil(
                elem.price - (elem.discountPercentage / 100) * elem.price
              )}
            </span>
          </div>
          <div className="rating" title="Product Rating">
            <Rating rating={elem.rating} />
          </div>
          <div className="stockWarning">
            Hurry up !!,
            <br />
            {elem.stock < 100
              ? `only ${elem.stock} left`
              : "stock about to end"}
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default HomeChild;
