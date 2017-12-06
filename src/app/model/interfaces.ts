export interface IPhoto {
  id: string;
  albumId: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface IAlbum {
  userId: string;
  id: string;
  title: string;
  photos: IPhoto[];
}

export interface IGeo {
  lat: string;
  lng: string;
}

export interface IAddress {
  // id: string;
  type: string;
  street: string;
  number: string;
  numberAdditive: string;
  zipCode: string;
  city: string;
  state: string;
  country: string;
  suite: string;
  geo: IGeo;
}

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
  albums: IAlbum[];
}

export interface IPhone {
  //  id: string;
  type?: string;
  number: string;
}

export interface IOrganisation {
  //  id: string;
  name: string;
  type: string;
  department: string;
  function: string;
  responsibleFor: string;
}
