import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  UsePipes,
} from "@nestjs/common";
import { MovieService } from "./movie.service";
import { MovieDto } from "./dto/movie.dto";
import { StringToLowerCasePipe } from "src/common/pipes/string-to-lowercase.pipe";
import { ApiHeader, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateMovieDto } from "./dto/create-movie.dto";

@ApiTags("Movies")
@Controller("movies")
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @ApiOperation({
    summary: "Получить список фильмов",
    description: "Возвращает список со всеми фильмами",
  })
  @ApiResponse({ status: HttpStatus.OK, description: "Фильмы найдены" })
  @Get()
  async findAll() {
    return this.movieService.findAll();
  }

  @ApiOperation({
    summary: "Получить фильм по id",
    description: "Возвращает информацию о фильме",
  })
  // @ApiParam({ name: 'id', type: 'string', description: 'Id фильма' })
  // @ApiQuery({ name: 'year', type: 'number', description: "Фильтр по году" })
  // @ApiHeader({ name: 'X-Auth-Token', description: "Токен авторизации" })
  @ApiNotFoundResponse({
    description: 'Фильм не найден',
    example: {
      status: 404,
      message: 'Movie not found',
      timestamp: '2025-01-18',
      path: '/movie/123'
    }
  })
  @ApiOkResponse({ description: "Фильм найден" })
  // @ApiResponse({ status: HttpStatus.NOT_FOUND, description: "Фильм не найден" })
  @Get(":id")
  async findById(@Param("id") id: string) {
    return this.movieService.findById(id);
  }

  @ApiOperation({ summary: "Создать фильм" })
  @Post()
  async create(@Body() dto: CreateMovieDto) {
    // return this.movieService.create(dto)
    return dto
  }

  // @Put(':id')
  // async update(@Param('id') id: string, @Body() dto: MovieDto) {
  //   return this.movieService.update(id, dto)
  // }

  // @Patch(':id')
  // async patchMovie(@Param('id') id: string, @Body() isPublic: boolean) {
  //   return this.movieService.patch(id, isPublic)
  // }

  // @Delete(':id')
  // async delete(@Param('id') id: string) {
  //   return this.movieService.delete(id)
  // }

  // @UsePipes(StringToLowerCasePipe)
  // @Post("create")
  // async createMovie(@Body('title') title: string) {
  //   return `MOVIE: $${title}`
  // }
}
