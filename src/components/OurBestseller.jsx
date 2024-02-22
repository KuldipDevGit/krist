import { Grid, Typography } from "@mui/material";
// import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import OurBestsellerProductCard from "./OurBestsellerProductCard";
export default function OurBestSeller() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track API errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        // Map through products to set image property to the first image in the images array
        const updatedProducts = data.products.map((product) => ({
          ...product,
          image: product.images[0], // Assuming images array is available in each product
        }));
        console.log("products", updatedProducts);
        setProducts(updatedProducts);
      } catch (err) {
        setError("Error fetching data:", err);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <>
      <Grid container alignItems={"center"} textAlign={"center"} rowGap={7}>
        <Grid item xs={12}>
          <Typography variant="h4" style={{ fontWeight: "bold" }}>
            Our Bestseller
          </Typography>
        </Grid>
        <Grid container rowSpacing={2} columnSpacing={2}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <OurBestsellerProductCard
                id={product.id}
                images={product.images}
                brand={product.brand}
                category={product.category}
                description={product.description}
                discountPercentage={product.discountPercentage}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
