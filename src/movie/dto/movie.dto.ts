import { IsArray, IsInt, IsNotEmpty, IsString, IsUUID, Max, Min } from "class-validator";

export class MovieDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsInt()
  @IsNotEmpty()
  @Max(new Date().getFullYear())
  @Min(1888)
  releaseYear: number;

  @IsString()
  imageUrl: string;

  @IsArray()
  @IsUUID('4', { each: true })
  actorIds: string[];
}
