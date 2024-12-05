import UserModel from "../user/user.model.js";

export default class ProductModel {
  constructor(id, name, desc, price, imageUrl, category, sizes) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.imageUrl = imageUrl;
    this.category = category;
    this.price = price;
    this.sizes = sizes;
  }
  // add product
  static add(product) {
    product.id = products.length + 1;
    products.push(product);
    return product;
  }
  // get product by ID
  static get(id) {
    const product = products.find((i) => i.id == id);
    return product;
  }
  // get all products
  static getAll() {
    return products;
  }
  // filter products
  static filter(minPrice, maxPrice, category) {
    const result = products.filter((product) => {
      return (
        (!minPrice || product.price >= minPrice) &&
        (!maxPrice || product.price <= maxPrice) &&
        (!category || product.category == category)
      );
    });
    return result;
  }
  // rateProduct
  static rateProduct(userID, productID, rating) {
    // 1. Validate user and product
    const user = UserModel.getAll().find((u) => u.id == userID);
    if (!user) {
      return "User not found";
    }

    // Validate Product
    const product = products.find((p) => p.id == productID);
    if (!product) {
      return "Product not found";
    }

    // 2. Validate rating value (assuming ratings are between 1 and 5)
    if (rating < 1 || rating > 5) {
      return "Rating must be between 1 and 5";
    }

    // 3. Check if there are any ratings and if not, add ratings array
    if (!product.ratings) {
      product.ratings = [];
    }

    // 4. Check if user has already rated the product
    const existingRatingIndex = product.ratings.findIndex(
      (r) => r.userID == userID
    );

    if (existingRatingIndex >= 0) {
      // 5. Update existing rating if found
      product.ratings[existingRatingIndex] = {
        userID: userID,
        rating: rating,
      };
    } else {
      // 6. Add new rating if not already rated
      product.ratings.push({
        userID: userID,
        rating: rating,
      });
    }

    return "Rating added/updated successfully";
  }
}

var products = [
  new ProductModel(
    1,
    "Product 1",
    "Description for Product 10",
    19.99,
    "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    "Category1"
  ),
  new ProductModel(
    2,
    "Product 2",
    "Description for Product 2",
    29.99,
    "https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg",
    "Category2",
    ["M", "XL"]
  ),
  new ProductModel(
    3,
    "Product 3",
    "Description for Product 3",
    39.99,
    "https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg",
    "Category3",
    ["M", "XL", "S"]
  ),
];


