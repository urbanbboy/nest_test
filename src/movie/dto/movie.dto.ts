import { IsInt, IsNotEmpty, IsString, Max, Min } from "class-validator";

export class MovieDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsInt()
  @IsNotEmpty()
  @Max(new Date().getFullYear())
  @Min(1888)
  releaseYear: number;
}
