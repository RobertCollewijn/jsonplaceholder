import {IAddress, IOrganisation, IUser} from './interfaces';
import {IPhone, Phone} from './phone';

interface IName {
  prefix: string; // voorvoegsel
  title: string; // titulatuur
  initials: string; // voorletter
  firstName: string; // voornaam
  // middleName: string; // tussen naam / tweede voornaam
  insertion: string; // tussenvoegsel
  lastName: string; // achternaam
  suffix: string; // toevoeging
  pronunciation: string; // uitspraak
  nickname: string; // roepnaam
  salutation: string; // aanhef
  fullName: string; // naam voluit
}

export class Name implements IName {
  prefix: string;
  title: string;
  initials: string;
  firstName: string;
  insertion: string;
  lastName: string;
  suffix: string;
  pronunciation: string;
  nickname: string;
  salutation: string;
  fullName: string;

  constructor(prefix: string,
              title: string,
              initials: string,
              firstName: string,
              insertion: string,
              lastName: string,
              suffix: string,
              pronunciation: string,
              nickname: string,
              salutation: string,
              fullName: string) {
    this.prefix = prefix;
    this.title = title;
    this.initials = initials;
    this.firstName = firstName;
    this.insertion = insertion;
    this.lastName = lastName;
    this.suffix = suffix;
    this.pronunciation = pronunciation;
    this.nickname = nickname;
    this.salutation = salutation;
    this.fullName = fullName;
  }

  static New(prefix?: string,
             title?: string,
             initials?: string,
             firstName?: string,
             insertion?: string,
             lastName?: string,
             suffix?: string,
             pronunciation?: string,
             nickname?: string,
             salutation?: string,
             fullName?: string): Name {
    const optionPrefix = prefix ? prefix : '';
    const optionTitle = title ? title : '';
    const optionInitials = initials ? initials : '';
    const optionFirstName = firstName ? firstName : '';
    const optionInsertion = insertion ? insertion : '';
    const optionLastName = lastName ? lastName : '';
    const optionSuffix = suffix ? suffix : '';
    const optionPronunciation = pronunciation ? pronunciation : '';
    const optionNickname = nickname ? nickname : '';
    const optionSalutation = salutation ? salutation : '';
    const optionFullName = fullName ? fullName : '';

    const newName: Name = {
      prefix: optionPrefix,
      title: optionTitle,
      initials: optionInitials,
      firstName: optionFirstName,
      insertion: optionInsertion,
      lastName: optionLastName,
      suffix: optionSuffix,
      pronunciation: optionPronunciation,
      nickname: optionNickname,
      salutation: optionSalutation,
      fullName: optionFullName
    };

    return newName;
  }
}

export interface IPerson {
  id: string;
  name: Name;
  phone: Phone[];
  // address: IAddress[];
  // organisation: IOrganisation[];
  // language;
  // notes: string;
  // labels: string[];
}

export class Person implements IPerson {
  id: string;
  name: Name;
  phone: Phone[];

  constructor(id: string,
              name: Name,
              phone: [Phone]) {
    this.id = id;
    this.name = name;
    this.phone = phone;
  }

static new(): Person {
  const id = '';
  const name: Name = Name.New('', '', '', '', '', '', '', '', '', '', '');
  const phone: Phone = {type: '', number: ''}; // Phone.newPhone(user.phone);
  const newPerson: Person = new Person(id, name, [phone]);
  const nPerson: Person = {
    id: id,
    name: name,
    phone: [phone]
  };

  return nPerson;
}

  static newByUser(user: IUser): Person {
    const id = '';
    const name: Name = Name.New('', '', '', '', '', '', '', '', '', '', user.name);
    const phone: Phone = {type: '', number: user.phone}; // Phone.newPhone(user.phone);
    const newPerson: Person = new Person(id, name, [phone]);
    const nPerson: Person = {
      id: id,
      name: name,
      phone: [phone]
    };

    return nPerson;
  }
}
