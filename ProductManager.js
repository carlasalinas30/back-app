class Product {
  constructor(productId, title, photo, price, stock) {
    this.productId = productId ;
    this.title = data.title; 
    this.photo = data.photo ;
    this.price = data.price;
    this.stock = data.stock; 
  }
}

class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(productId, title, photo, price, stock) {
    const newProduct = new Product(productId, title, photo, price, stock);
    this.products.push(newProduct);
  }

  removeProduct(productId) {
    this.products = this.products.filter(product => product.productId !== productId);
  }

  getProductById(productId) {
    return this.products.find(product => product.productId === productId);
  }

  getAllProducts() {
    return this.products;
  }

  create(data) {
    const { productId, title, photo, price, stock } = data;
    this.addProduct(productId, title, photo, price, stock);
  }
}


const productManager = new ProductManager();

productManager.create({ productId: 1, title: 'Producto 1', photo: 'images/product1.jpg', price: 19.99, stock: 50 });
productManager.create({ productId: 2, title: 'Producto 2', photo: 'images/product2.jpg', price: 29.99, stock: 30 });

console.log(productManager.getAllProducts());

const retrievedProduct = productManager.getProductById(1);
console.log(retrievedProduct);

productManager.removeProduct(2);
console.log(productManager.getAllProducts());
