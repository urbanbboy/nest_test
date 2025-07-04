import { MovieEntity } from "src/movie/entities/movie.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "reviews" })
export class ReviewEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: "text",
    nullable: true,
  })
  text: string;

  @Column({
    type: "decimal",
    precision: 3,
    scale: 1,
    default: 0.0,
  })
  rating: number;

  @Column({
    name: "movie_id",
    type: "uuid",
  })
  movieId: string;

  @ManyToOne(() => MovieEntity, (movie) => movie.reviews, {
    onDelete: "CASCADE", // при удалении фильма удалятся и отзывы
  })
  @JoinColumn({ name: "movie" })
  movie: MovieEntity;

  @UpdateDateColumn({
    name: "updated_at",
  })
  updatedAt: Date;

  @CreateDateColumn({
    name: "created_at",
  })
  createdAt: Date;
}
