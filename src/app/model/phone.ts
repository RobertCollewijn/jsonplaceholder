export interface IPhone {
  //  id: string;
  type: string;
  number: string;
}

export class Phone implements IPhone {
  constructor(public number: string, public type: string) {
    this.type = type;
    this.number = number;
  }

  static New(type: string, number: string): Phone {

    const optionType = type ? type : '';

    const newPhone = new Phone(optionType, number);

    return newPhone;
  }

  static newPhone(number: string, type?: string): Phone {

    const optionType = type ? type : '';

    const newPhone = new Phone(optionType, number);

    return newPhone;
  }
}
