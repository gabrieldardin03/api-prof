import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateDisciplinaDto {
  @IsNotEmpty()
  nome: string;

  @IsInt()
  cargaHoraria: number;

  @IsInt()
  professorId: number;
}
