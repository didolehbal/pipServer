import { IsNotEmpty, IsDate, IsEmail } from 'class-validator';

export class createUser {
    @IsNotEmpty()
    name : string
    
    @IsEmail()
    @IsNotEmpty()
    email : string
    
    @IsNotEmpty()
    filiere : string
    @IsNotEmpty()
    username:string
    @IsNotEmpty()
    password: string
    @IsNotEmpty()
    password_confirmation : string
    
}

