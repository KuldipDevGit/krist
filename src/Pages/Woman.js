import React from "react";
import { Grid, Typography } from "@mui/material";
import all_product from "../assets/all_product";
import ProductCard from "../components/ProductCard";
function Woman() {
  return (
    <Grid
      container
      alignItems={"center"}
      rowGap={7}
      rowSpacing={2}
      columnSpacing={2}
      mt={3}
    >
      <Grid item xs={12} textAlign={"center"}>
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          WOMENS WEAR
        </Typography>
      </Grid>
      {all_product
        .filter((product) => product.category === "women")
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
  );
}

export default Woman;
