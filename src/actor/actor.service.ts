import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ActorEntity } from "./entities/actor.entity";
import { Repository } from "typeorm";
import { CreateActorDto } from "./dto/create-actor.dto";

@Injectable()
export class ActorService {
  constructor(
    @InjectRepository(ActorEntity)
    private readonly actorRepository: Repository<ActorEntity>
  ) {}

  async create(dto: CreateActorDto): Promise<ActorEntity> {
    const { name } = dto;

    const actor = this.actorRepository.create({
      name,
    });

    return await this.actorRepository.save(actor);
  }
}
