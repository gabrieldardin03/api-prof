import { Module } from '@nestjs/common';
import { ProfessorService } from './professor/professor.service';
import { ProfessorController } from './professor/professor.controller';
import { DisciplinaService } from './disciplina/disciplina.service';
import { DisciplinaController } from './disciplina/disciplina.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [ProfessorController, DisciplinaController],
  providers: [ProfessorService, DisciplinaService, PrismaService],
})
export class AppModule {}
