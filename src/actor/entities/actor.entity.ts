import { MovieEntity } from "src/movie/entities/movie.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "actors" })
export class ActorEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: "varchar",
    length: 64,
  })
  name: string;

  //many actors to many movies
  @ManyToMany(() => MovieEntity, (movie) => movie.actors)
  movies: MovieEntity[];

  @UpdateDateColumn({
    name: "updated_at",
  })
  updatedAt: Date;

  @CreateDateColumn({
    name: "created_at",
  })
  createdAt: Date;
}
