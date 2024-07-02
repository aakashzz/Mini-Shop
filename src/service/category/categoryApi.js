import api from "../api";
class Category {
   baseUrl;
   constructor() {
      this.baseUrl = api;
   }

   async allGetCategory() {
      try {
         const allCategory = await this.baseUrl.get("/products/category");
         return allCategory.data.products;
      } catch (error) {
        console.log(error.message);
        throw error.message;
      }
   }

   async selectedCategory (selectedValue) {
    try {
        const selectedCategory = await this.baseUrl.get(`/products/category/${selectedValue}`);
        return selectedCategory.data.products;
    } catch (error) {
        console.log(error.message);
        throw error.message;
    }
   }

   async listOfCategory () {
    try {
        const listCategory = await this.baseUrl.get('/category-list');
        return listCategory.data;
    } catch (error) {
        console.log(error.message);
        throw error.message;
    }
   }
}

const category = new Category();

export default category;