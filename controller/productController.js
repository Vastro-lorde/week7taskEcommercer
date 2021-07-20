// Importing the list of products from /models/Products
const productList = require("../models/products");



// creates the class for making objects to push to the array of objects
class newProduct{
    constructor(id, name, description, image, price){
      this.id = id;
      this.name = name;
      this.description = description;
      this.image = image;
      this.price = price;
    }
  }

// This function adds the product to the array of products.
exports.addProduct = (request,response)=>{
    console.log(request.body);
    const Product = new newProduct(
      +productList.length + 1, 
      `${request.body.name}`, 
      `${request.body.description}`,
      `${request.body.image}`,
      +request.body.price)
      productList.push(Product);
    response.json(productList);
  }

// This function finds a product in the array of productList.
exports.findAproduct = (request, response)=>{
    const itemId = Number(request.params.id);
    const findProduct = productList.filter(productList => productList.id === itemId);
    response.json(findProduct)
    console.log(itemId);
    console.log(request.url);
  }

// This function edits a product in the array of products.
exports.updateProduct=(request,response)=>{
    const itemId = Number(request.params.id);
    let findProduct = productList.find(p => p.id === itemId);
    let index = productList.indexOf(findProduct)
    updateProduct ={
      id: itemId,
      name: request.body.name,
      description: request.body.description,
      image: request.body.image,
      price: +request.body.price
    }
    productList[index] = updateProduct;
    response.json(productList);
  }

// This function lists all products in the array of products.
exports.listAllProducts = (request,response)=>{
    console.log(productList.length);
    response.json(productList)
    
}

//
exports.deleteProduct = (request,response)=>{
    const itemId = Number(request.params.id);
    const findProduct = productList.findIndex(p => p.id === itemId);
    let index = +findProduct;
    productList.splice(index, 1);
    console.log(index);
    console.log(productList);
    response.json(productList)
  }