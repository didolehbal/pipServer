import { IsNotEmpty, IsDate, IsEmail } from 'class-validator';
import { Filiere } from 'src/filiers/model/filier.entity';

export class createUser {
    @IsNotEmpty()
    name : string
    
    @IsEmail()
    @IsNotEmpty()
    email : string
    
    @IsNotEmpty()
    username:string
    @IsNotEmpty()
    password: string
    @IsNotEmpty()
    password_confirmation : string
    
    filiere?:Filiere

}

