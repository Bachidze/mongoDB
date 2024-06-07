import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { ExpenseValidateIdDTO } from './dto/expense-id.dto';

@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post()
  create(@Body() createExpenseDto: CreateExpenseDto) {
    return this.expenseService.create(createExpenseDto);
  }

  @Get()
  findAll() {
    return this.expenseService.findAll();
  }

  @Get(':id')
  findOne(@Param() param:ExpenseValidateIdDTO) {
    const { id } = param
    return this.expenseService.findOne(id);
  }

  @Patch(':id')
  update(@Param() param:ExpenseValidateIdDTO, @Body() updateExpenseDto: UpdateExpenseDto) {
    const {id} = param
    return this.expenseService.update(id, updateExpenseDto);
  }

  @Delete(':id')
  remove(@Param() param: ExpenseValidateIdDTO) {
    const {id} = param
    return this.expenseService.remove(id);
  }
}
