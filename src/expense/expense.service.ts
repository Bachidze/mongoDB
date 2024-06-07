import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Expense } from './entities/expense.entity';
import { Model } from 'mongoose';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectModel(Expense.name) private ExpenseModel: Model<Expense>,
  ) {}

  async create(createExpenseDto: CreateExpenseDto) {
    try {
      const createExpense = await this.ExpenseModel.create(createExpenseDto);
      await createExpense.save();
      return createExpense;
    } catch (er) {
      throw new HttpException("name already used",HttpStatus.BAD_REQUEST)
    }
  }

  findAll() {
    return this.ExpenseModel.find();
  }

  async findOne(id: string) {
    const findExpenseById = await this.ExpenseModel.findById(id)
    if(!findExpenseById) throw new HttpException("User Not Found",HttpStatus.NOT_FOUND)
    return findExpenseById
  }

  async update(id: string, updateExpenseDto: UpdateExpenseDto) {
    const updateExpense = await this.ExpenseModel.findByIdAndUpdate(id,{...updateExpenseDto,$inc:{__v:1}}, {new:true,runValidators:true})
    return updateExpense
  }

  async remove(id: string) {
    const removedExpense = await this.ExpenseModel.findByIdAndDelete(id)
    if(!removedExpense) throw new HttpException("User Not Found",HttpStatus.NOT_FOUND)
    return removedExpense
}
}
