export class Product {
  id: number;
  name: string;
  price: number;
  category: number;
  calories: number;
  createCountry: string;
  company: string;
  categoryValue: string;

  public static toProduct(data: any) {
    // let jsonData = JSON.parse(data); We don't need to parse this

    let products: Array<Product> = new Array<Product>();

    data.forEach(element => {
      let product: Product;
      product = new Product();
      product.calories = +element.calories;
      product.category = +element.category;
      product.company = element.company;
      product.createCountry = element.createCountry;
      product.id = +element.id;
      product.name = element.name;
      product.price = +element.price;

      products.push(product);
    });

    return products;
  }
}


