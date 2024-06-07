import { Module } from '@nestjs/common';
import { ExpenseModule } from './expense/expense.module';
import { MongooseModule } from '@nestjs/mongoose'; 
@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://bachi:bachi@mongo1.wasgysu.mongodb.net/?retryWrites=true&w=majority&appName=mongo1"),ExpenseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
