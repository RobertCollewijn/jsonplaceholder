import {Album} from './album';
/**
 * Created by Robert on 27-06-2017.
 */
class Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;

  constructor(street: string, suite: string, city: string, zipcode: string, geo: Geo) {
    this.street = street;
    this.suite = suite;
    this.city = city;
    this.zipcode = zipcode;
    this.geo = geo;
  };
}

class Geo {
  lat: string;
  lng: string;

  constructor(lat: string, lng: string) {
    this.lat = lat;
    this.lng = lng;
  };
}

export class User {
  id: string;
  name: string;
  username: string;
  email: string;
  address: Address;
  albums: Album[];

/*
  constructor(id: string, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.albums = new Array();
  }
*/

  constructor(json: any) {
    this.id = json.id;
    this.name = json.name;
    this.username = json.username;
    this.email = json.email;
    this.address = new Address(
      json.address.street,
      json.address.suite,
      json.address.city,
      json.address.zipcode,
      new Geo(json.address.geo.lat, json.address.geo.lng));
    this.albums = new Array();
  }

  addAlbum(album: Album) {
    this.albums.push(album);
  }

}
