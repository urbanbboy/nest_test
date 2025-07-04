import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { MovieService } from "./movie.service";
import { MovieDto } from "./dto/movie.dto";


@Controller("movies")
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async findAll() {
    return this.movieService.findAll()
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.movieService.findById(id)
  }

  @Post()
  async create(@Body() dto: MovieDto) {
    return this.movieService.create(dto)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: MovieDto) {
    return this.movieService.update(id, dto)
  }

  @Patch(':id')
  async patchMovie(@Param('id') id: string, @Body() isPublic: boolean) {
    return this.movieService.patch(id, isPublic)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.movieService.delete(id)
  }
}
