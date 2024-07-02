import api from "../api";

class Products {
   baseURL;
   constructor() {
      this.baseURL = api;
   }

   async allProducts() {
      try {
         const products = await this.baseURL.get("/products");
         return products.data.products;
      } catch (error) {
         console.log(error.message);
         throw error.message;
      }
   }

   async inputProduct(value) {
      try {
         if (value) {
            const product = await this.baseURL.get(
               `/products/search?q=${value}`
            );
            return product.data.products;
         }
      } catch (error) {
        console.log(error.message);
        throw error.message;
      }
   }
}

const products = new Products();
export default products;