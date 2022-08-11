import { v4 as uuid } from 'uuid';

export class BankAccount {
  //typeorm
  id: string;

  balance: number;

  account_number: string;

  constructor(balance: number, account_number: string, id?: string) {
    //regras de negócio
    this.id = id ?? uuid();
    this.balance = balance;
    this.account_number = account_number;
  }

  debit(amount: number): void {
    //regras de negócio
    this.balance -= amount;
  }

  credit(amount: number): void {
    //regras de negócio
    this.balance += amount;
  }
}

// type BankAccountProps = {
//   balance: number;
//   account_number: string;
// }

// export class BankAccount {
//   //typeorm
//   id: string;

//   constructor(public readonly props: BankAccountProps, id?: string) {
//     //regras de negócio
//     this.id = id ?? uuid();
//   }

//   debit(amount: number): void {
//     //regras de negócio
//     this.balance -= amount;
//   }

//   credit(amount: number): void {
//     //regras de negócio
//     this.balance += amount;
//   }

//   get balance(): number {
//     return this.props.balance;
//   }

//   private set balance(value: number){
//     this.props.balance = value;
//   }
  
//   get account_number(): string {
//     return this.props.account_number;
//   }

//   private set account_number(value: string){
//     this.props.account_number = value;
//   }
// }
//criar
//depositar
//creditar

//

//prisma linguagem schema eficiente
//serviços externos ao ORM

//

//risca

//ddd - solucionar/ajudar a complexidade do coração do sistema
//linguagem ubiqua
//arquitetura em camadas 
