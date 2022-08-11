import { Repository } from 'typeorm';
import { BankAccountSchema } from './bank-account.schema';
import { BankAccount } from '../../domain/bank-account';
import { BankAccountRepository } from '../../domain/bank-account.repository';

export class BankAccountTypeOrmRepository implements BankAccountRepository {
  constructor(private ormRepo: Repository<BankAccountSchema>) {}

  async insert(bankAccount: BankAccount): Promise<void> {
    const model = this.ormRepo.create(bankAccount);
    await this.ormRepo.insert(model);
  }

  async update(bankAccount: BankAccount): Promise<void> {
    await this.ormRepo.update(bankAccount.id, {
      balance: bankAccount.balance,
    });
  }

  async findByAccountNumber(account_number: string): Promise<BankAccount> {
    const model = await this.ormRepo.findOneBy({
      account_number: account_number,
    });
    return new BankAccount(model.balance, model.account_number, model.id);
  }
}
