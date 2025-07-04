import { ActorEntity } from "src/actor/entities/actor.entity";
import { ReviewEntity } from "src/review/entities/review.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  UpdateDateColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable
} from "typeorm";

export enum Genre {
    ACTION = 'action',
    COMEDY = 'comedy',
    DRAMA = 'drama',
    HORROR = 'horror'
}

//entity - сущность в БД
@Entity({ name: "movies" })
export class MovieEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 128,
    // nullable: true
  })
  title: string;

  @Column({
    type: 'text',
    nullable: true
  })
  description: string;

  @Column({
    name: "release_year",
    type: "int",
    // unsigned: true //только положительные числа
  })
  releaseYear: number;

  @Column({
    type: 'decimal',
    precision: 3,
    scale: 1,
    default: 0.0
  })
  rating: number;

  @Column({ 
    name: "is_available",
    type: 'boolean',
    default: false
   })
  isAvailable: boolean;

  @Column({
    type: 'enum',
    enum: Genre,
    default: Genre.DRAMA
  })
  genre: Genre;

  @OneToMany(() => ReviewEntity, (review) => review.movie)
  reviews: ReviewEntity[];

  @ManyToMany(() => ActorEntity, actor => actor.movies)
  @JoinTable({
    name: 'movie_actors',
    joinColumn: { name: "movie_id", referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'actor_id', referencedColumnName: 'id' }
  })
  actors: ActorEntity[];

  @CreateDateColumn({
    name: 'created_at'
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at'
  })
  updatedAt: Date;
}
