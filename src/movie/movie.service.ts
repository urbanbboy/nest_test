import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MovieEntity } from "./entities/movie.entity";
import { Repository } from "typeorm";
import { MovieDto } from "./dto/movie.dto";

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieRepository: Repository<MovieEntity>
  ) {}

  async findAll(): Promise<MovieEntity[]> {
    return await this.movieRepository.find({
      // where: {
      //   isAvailable: true,
      // },
      order: {
        createdAt: "desc",
      },
      // select: {
        // id: true,
        // title: true,
      // },
      // take: 1
    });
  }

  async create(dto: MovieDto): Promise<MovieEntity> {
    const movie = this.movieRepository.create(dto);
    return await this.movieRepository.save(movie);
  }

  async findById(id: string): Promise<MovieEntity> {
    const movie = await this.movieRepository.findOne({
      where: {
        id,
      },
    });
    if (!movie) throw new NotFoundException("Фильм не найден.");
    return movie;
  }

  async update(id: string, dto: MovieDto): Promise<boolean> {
    const movie = await this.findById(id);

    Object.assign(movie, dto);

    await this.movieRepository.save(movie);

    return true;
  }

  async patch(id: string, isPublic: boolean) {
    const movie = await this.findById(id);

    movie.isAvailable = isPublic;

    await this.movieRepository.save(movie);

    return true;
  }

  async delete(id: string): Promise<string> {
    const movie = await this.findById(id);

    await this.movieRepository.remove(movie);

    return movie.id;
  }
}
