class Product {
        constructor(id, title, photo, price, stock) {
          this.id = id;
          this.title = title;
          this.photo = photo;
          this.price = price;
          this.stock = stock;
        }
      }
      
      class ProductManager {
        constructor() {
          this.products = [];
        }
      
        addProduct(id, title, photo, price, stock) {
          const newProduct = new Product(id, title, photo, price, stock);
          this.products.push(newProduct);
        }
      
        removeProduct(productId) {
          this.products = this.products.filter(product => product.id !== productId);
        }
      
        getProductById(productId) {
          return this.products.find(product => product.id === productId);
        }
      
        getAllProducts() {
          return this.products;
        }
      }
      
      // Ejemplo de uso
      const productManager = new ProductManager();
      
      productManager.addProduct(1, 'Producto 1', 'url1.jpg', 19.99, 50);
      productManager.addProduct(2, 'Producto 2', 'url2.jpg', 29.99, 30);
      
      console.log(productManager.getAllProducts());
      
      const retrievedProduct = productManager.getProductById(1);
      console.log(retrievedProduct);
      
      productManager.removeProduct(2);
      console.log(productManager.getAllProducts());
      
