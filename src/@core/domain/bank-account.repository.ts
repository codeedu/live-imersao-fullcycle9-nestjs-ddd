import { BankAccount } from './bank-account';

export interface BankAccountRepository {
  insert(bankAccount: BankAccount): Promise<void>;
  update(bankAccount: BankAccount): Promise<void>;
  findByAccountNumber(accountNumber: string): Promise<BankAccount>;
}
