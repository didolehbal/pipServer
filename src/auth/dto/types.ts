import { IsNotEmpty } from 'class-validator';

export class signUp {
    @IsNotEmpty()
    username:string
    @IsNotEmpty()
    password:string
    @IsNotEmpty()
    password_confirmation : string
}


export class signIn {
    @IsNotEmpty()
    username:string
    @IsNotEmpty()
    password:string
}