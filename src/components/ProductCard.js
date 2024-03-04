import React from "react";
import { Card, CardContent, Typography, Divider } from "@mui/material";
import "../styles/product-card.css";

const ProductCard = ({ id, name, category, image, new_price, old_price }) => {
  console.log("product data", id, name, category, image, new_price, old_price);
  return (
    <Card
      className="container"
      sx={{
        backgroundImage: `url(${image})`,
        backgroundColor: "#000",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <CardContent className="overlay">
        <div className="items"></div>
        <div className="items head">
          <Typography variant="h6">{name}</Typography>
          <Divider />
        </div>
        <div className="items price">
          <Typography className="old">${old_price}</Typography>
          <Typography className="new">${new_price}</Typography>
        </div>
        <div className="items cart">
          <i className="fa fa-shopping-cart"></i>
          <span>ADD TO CART</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
