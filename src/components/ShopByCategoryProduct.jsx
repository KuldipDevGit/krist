import axios from "axios"; // Make sure this is correctly imported (case-sensitive)

export default function ShopByCategoryProduct() {
  // Define an async function to fetch and store products
  async function fetchProducts() {
    try {
      // Await the axios call to resolve, making the asynchronous code look synchronous
      const response = await axios.get(
        "https://dummyjson.com/products/categories"
      );

      // Assuming you want to store the products data in a variable
      const productsData = response.data;

      // Now, you can use console.log to see the data
      console.log(productsData);

      // If you need to use the productsData outside, consider returning it from the function
    } catch (error) {
      // Handle any errors that occur during the fetch
      console.error("There was an error!", error);
    }
  }
  fetchProducts();
}
