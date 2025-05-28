import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';

@Injectable()
export class ProfessorService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateProfessorDto) {
    return this.prisma.professor.create({ data });
  }

  findAll() {
    return this.prisma.professor.findMany({ include: { disciplinas: true } });
  }

  findOne(id: number) {
    return this.prisma.professor.findUnique({ where: { id }, include: { disciplinas: true } });
  }

  async update(id: number, data: UpdateProfessorDto) {
    await this.findOne(id); // valida se existe
    return this.prisma.professor.update({ where: { id }, data });
  }

  async remove(id: number) {
    await this.findOne(id); // valida se existe
    return this.prisma.professor.delete({ where: { id } });
  }
}
