import { Controller, Get, Post, Body, Param, HttpCode } from '@nestjs/common';
import { BankAccountService } from '../@core/domain/bank-account.service';
import { BankAccountsService } from './bank-accounts.service';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { TransferBankAccountDto } from './dto/transfer-bank-account.dto';

@Controller('bank-accounts')
export class BankAccountsController {
  constructor(
    private readonly bankAccountsService: BankAccountsService,
    private bankAccountService: BankAccountService,
  ) {}

  @Post()
  create(@Body() createBankAccountDto: CreateBankAccountDto) {
    return this.bankAccountService.create(createBankAccountDto.account_number);
  }

  @Get()
  findAll() {
    return this.bankAccountsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bankAccountsService.findOne(id);
  }

  @HttpCode(204)
  @Post('transfer')
  transfer(@Body() transferDto: TransferBankAccountDto) {
    return this.bankAccountService.transfer(
      transferDto.from,
      transferDto.to,
      transferDto.amount,
    );
  }
}
