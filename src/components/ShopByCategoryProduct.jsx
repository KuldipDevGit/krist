// ShopByCategoryProduct.js
import React from "react";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import all_product from "../assets/all_product";

export default function ShopByCategoryProduct() {
  return (
    <>
      <Grid container rowSpacing={2} columnSpacing={2}>
        {all_product
          .filter((product) => product.id === 13 && product.category === "men")
          .map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard
                id={product.id}
                name={product.name}
                category={product.category}
                image={product.image}
                new_price={product.new_price}
                old_price={product.old_price}
              />
            </Grid>
          ))}
        {all_product
          .filter((product) => product.id === 7 && product.category === "women")
          .map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard
                id={product.id}
                name={product.name}
                category={product.category}
                image={product.image}
                new_price={product.new_price}
                old_price={product.old_price}
              />
            </Grid>
          ))}
        {all_product
          .filter((product) => product.id === 26 && product.category === "kid")
          .map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard
                id={product.id}
                name={product.name}
                category={product.category}
                image={product.image}
                new_price={product.new_price}
                old_price={product.old_price}
              />
            </Grid>
          ))}
      </Grid>
    </>
  );
}
