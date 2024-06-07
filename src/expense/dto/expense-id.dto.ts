import { IsMongoId } from "class-validator";


export class ExpenseValidateIdDTO{
    @IsMongoId()
    id:string
}