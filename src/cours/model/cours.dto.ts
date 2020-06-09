import {IsNotEmpty} from "class-validator"

export class CreateCours{

    @IsNotEmpty()
    title: string;
  
    @IsNotEmpty()
    anneeScolaire : string;
  
    picture : string;
  
    @IsNotEmpty()
    filiere : string
}


export class UpdateCours extends CreateCours{
    @IsNotEmpty()
    id : number
}