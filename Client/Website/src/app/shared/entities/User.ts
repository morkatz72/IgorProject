export class User {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  gender: number;

  // define user type
  // 1 - for regular user
  // 2 - for manager user
  userType: number;

  public static toUser(data: any) {
    // let jsonData = JSON.parse(data); We don't need to parse this

    let users: Array<User> = new Array<User>();

    data.forEach(element => {
      let product: User;
      product = new User();
      product.userName = element.userName;
      product.gender = +element.gender;
      product.firstName = element.firstName;
      product.lastName = element.lastName;
      product.email = element.email;
      product.userType = element.userType;


      users.push(product);
    });

    return users;
  }
}
