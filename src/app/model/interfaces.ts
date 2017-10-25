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
  street: string;
  suite: string;
  city: string;
  postcode: string;
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

