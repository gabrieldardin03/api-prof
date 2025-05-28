import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateProfessorDto {
  @IsNotEmpty()
  nome: string;

  @IsEmail()
  email: string;
}
