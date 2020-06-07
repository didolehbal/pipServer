import {IsNotEmpty} from "class-validator"

export class CreateCours{
    @IsNotEmpty()
    title : string
    @IsNotEmpty()
    description:string
}


export class UpdateCours extends CreateCours{
    @IsNotEmpty()
    id : number
}