import {IsNotEmpty} from "class-validator"
export class AddEtudiant{
    @IsNotEmpty()
    filierId : number
    @IsNotEmpty()
    userId: number
}