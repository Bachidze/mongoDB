import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Expense {

    @Prop({required:true,unique:true})
    name:string;

    @Prop({required:true})
    cost:number;

    @Prop()
    description:string;

}

export const ExpenseSchema = SchemaFactory.createForClass(Expense)
