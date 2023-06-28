const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  constructor() {
    super({ table: "product" });
  }

  insert(product) {
    return this.database.query(
      `insert into ${this.table} (name, image, stock, price, description) values (?, ?, ?, ?, ?)`,
      [
        product.name,
        product.image,
        product.stock,
        product.price,
        product.description,
      ]
    );
  }

  update(product) {
    return this.database.query(
      `update ${this.table} set name = ?, image = ?, stock = ?, price = ?, description = ? where id = ?`,
      [
        product.name,
        product.image,
        product.stock,
        product.price,
        product.description,
        product.id,
      ]
    );
  }
}

module.exports = ProductManager;
