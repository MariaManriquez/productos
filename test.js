import {Products, ProductsManagement} from "./products.js";

let p1 = new Products("Pollo", "POllo Sofia", 20);
let p2 = new Products("Galletas", "Galletas Mabel", 50);
let p3 = new Products("Pollo", "POllo Imba", 50);

let manager = new ProductsManagement();
manager.addProducts(p1);
manager.addProducts(p2);
//manager.removeProducts(p1);
manager.updateProducts(p1, p3);
console.log(manager.showProducts());

