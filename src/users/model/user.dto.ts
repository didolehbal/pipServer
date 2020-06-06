import { IsNotEmpty, IsDate } from 'class-validator';

export class subscriptionDTO {
    @IsDate()
    @IsNotEmpty()
    start:Date
    @IsDate()
    @IsNotEmpty()
    end:Date
}

