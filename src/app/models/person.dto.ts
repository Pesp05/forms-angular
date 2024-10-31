export class PersonDto {
    constructor(
      public name: string,
      public surname: string,
      public nif: number,
      public email: string,
      public phone: string,
      public sexo: string,
      public knowPage: string,
      public password: string,
    ) {}
}