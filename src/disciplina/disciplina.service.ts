import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';

@Injectable()
export class DisciplinaService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateDisciplinaDto) {
    return this.prisma.disciplina.create({ data });
  }

  findAll() {
    return this.prisma.disciplina.findMany({ include: { professor: true } });
  }

  findOne(id: number) {
    return this.prisma.disciplina.findUnique({ where: { id }, include: { professor: true } });
  }

  async update(id: number, data: UpdateDisciplinaDto) {
    await this.findOne(id);
    return this.prisma.disciplina.update({ where: { id }, data });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.disciplina.delete({ where: { id } });
  }
}
