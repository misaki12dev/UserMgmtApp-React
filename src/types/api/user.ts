export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: -37.3159;
      lng: 81.1496;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: Mstring;
    bs: string;
  };
};
