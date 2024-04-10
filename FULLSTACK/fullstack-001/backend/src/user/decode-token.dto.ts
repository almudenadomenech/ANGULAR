/* {
    sub: 1,
    email: 'user1@gmail.com',
    role: 'admin',
    iat: 1712656803,
    exp: 1713261603
  } */

  export interface DecodedToken {
    //subjct: id del usuario
    sub: number;
    email: string;
    role: string;
    // fecha de emisión
    iat: number;
    // fecha de expiración
    exp: number;
  }