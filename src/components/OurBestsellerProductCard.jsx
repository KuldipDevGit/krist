import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

const OurBestsellerProductCard = ({
  id,
  brand,
  category,
  description,
  discountPercentage,
  images,
}) => {
  const imageURL = images?.length > 0 ? images[0] : null;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const cardHoverStyles = {
    cursor: "pointer",
    opacity: isHovered ? 0.8 : 1,
  };

  const addButtonStyles = {
    opacity: isHovered ? 1 : 0,
    transition: "opacity 0.2s ease-in-out",
  };

  return (
    <>
      {id <= 8 && (
        <Card
          sx={cardHoverStyles}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Box
            sx={{ display: "flex", flexDirection: "column" }}
            height={"500px"}
            width={"100%"}
          >
            <CardMedia
              component="im"
              image={imageURL} // Use the retrieved image URL
              sx={{ height: "300px", width: "300px", p: 2 }}
              //   alt={${brand} product}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {brand}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {category}
              </Typography>
              <Typography variant="body2">{description}</Typography>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
              >
                <Typography variant="body2" color="primary.main">
                  {discountPercentage}% off
                </Typography>
                <Button variant="contained" sx={addButtonStyles}>
                  {/* Replace with your "Add to cart" logic */}
                  Add to Cart
                </Button>
              </Box>
            </CardContent>
          </Box>
        </Card>
      )}
    </>
  );
};

export default OurBestsellerProductCard;
